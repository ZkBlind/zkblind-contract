// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IVerifier {
    function verifyProof(
        bytes memory _proof,
        uint256[3] memory _input
    ) external returns (bool);
}

contract Whitelist is Ownable {

    IVerifier public immutable verifier;

    struct WhitelistData{
        uint256 userId;
        address userAddr;
        bytes32 emailSuffix;
    }

    mapping(address => WhitelistData) public whitelistedList;


    constructor(IVerifier _verifier) {
        verifier = _verifier;
    }

    function addToWhitelist(
        bytes calldata _proof,
        uint256 _userId,
        bytes32 _emailSuffix
    ) public {
        require(
            verifier.verifyProof(
                _proof,
                [
                    _userId,
                    uint256(_emailSuffix),
                    uint256(uint160(msg.sender))
                ]
            ),
            "Invalid proof"
        );
        WhitelistData memory newWhitelistData = WhitelistData({
            userId: _userId,
            userAddr: msg.sender,
            emailSuffix: _emailSuffix
        });
        whitelistedList[msg.sender] = newWhitelistData;
    }

    function verifyUser(address _white) public view returns(bool) {
        return whitelistedList[_white].userId > 0;
    }

}