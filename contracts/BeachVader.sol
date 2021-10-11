// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import { Base64 } from "./libraries/Base64.sol";

contract BeachVader is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  string[] phrases = [
    "He's as clumsy as he is stupid.",
    "You don't know the power of the dark side.",
    "I must obey my master.",
    "It has seen the end of Kenobi.",
    "It will soon see the end of the Rebellion.",
    "I am altering the deal, pray I don't alter it any further.",
    "Be careful not to choke on your aspirations.",
    "You have controlled your fear.",
    "Now, release your anger.",
    "Only your hatred can destroy me.",
    "The ability to destroy a planet is insignificant next to the power of the Force.",
    "No... I am your Father.",
    "I find your lack of faith disturbing.",
    "If you're not with me, then you're my enemy.",
    "There is no escape, don't make me destroy you."
    "The emperor is not as forgiving as i am.",
    "Ff you will not turn to the dark side, then perhaps she will."
  ];

  event MintedNFT(address indexed creator, uint256 tokenId);

  constructor() ERC721 ("BeachVader", "BCV") {
    console.log("I'm alive!");
  }

  function mintNFT() public {
    uint256 currentTokenId = _tokenIds.current();

    string memory svg = buildSvg(currentTokenId);
    string memory name = string(abi.encodePacked("Beach Vader ", Strings.toString(currentTokenId)));
    string memory json = Base64.encode(
      bytes(
        string(
          abi.encodePacked(
            '{"name": "',
            name,
            '", "description": "Lord Vader prashing himself from the beach.",',
            '"image": "data:image/svg+xml;base64,',
            Base64.encode(bytes(svg)),
            '"}'
          )
        )
      )
    );

    string memory finalTokenUri = string(
        abi.encodePacked("data:application/json;base64,", json)
    );

    _safeMint(msg.sender, currentTokenId);
    _setTokenURI(currentTokenId, finalTokenUri);
    emit MintedNFT(msg.sender, currentTokenId);
    console.log("An NFT w/ ID %s has been minted to %s", currentTokenId, msg.sender);

    _tokenIds.increment();

  }

  function buildSvg(uint256 tokenId) internal view returns (string memory) {
    string memory first = pickRandomPhrase(tokenId, "FIRST_PHRASE");
    string memory second = pickRandomPhrase(tokenId, "SECOND_PHRASE");
    string memory third = pickRandomPhrase(tokenId, "THIRD_PHRASE");

    string memory svgStart = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350"><rect width="100%" height="100%" fill="black" /><foreignObject x="20" y="20" width="310" height="200"><div xmlns="http://www.w3.org/1999/xhtml" style="width: 100%; height: 100%; overflow: hidden; color: white; font-family: sans-serif; line-height: 1.5"><p>';
    string memory svgEnd = '</p></div></foreignObject><path d="M167.866 329.254L168.6 321.186V317.186C168.6 315.586 169.4 315.586 171.8 315.586C173.013 315.754 174.138 316.316 175 317.186C175.862 316.316 176.987 315.754 178.2 315.586C180.6 315.586 181.4 315.586 181.4 317.186V321.186L182.134 329.259C182.152 329.457 182.243 329.642 182.391 329.777C182.538 329.912 182.731 329.986 182.931 329.986H183.8C184.649 329.986 185.463 329.649 186.063 329.049C186.663 328.449 187 327.635 187 326.786V326.786L183.8 315.586C183.8 310.197 180.836 306.289 175.621 306.003C174.384 305.971 173.153 306.19 172.003 306.645C170.852 307.101 169.805 307.784 168.926 308.654C168.046 309.524 167.351 310.563 166.882 311.708C166.414 312.854 166.182 314.082 166.2 315.319L163 326.781C163 327.629 163.337 328.443 163.937 329.043C164.537 329.644 165.351 329.981 166.2 329.981H167.069C167.269 329.981 167.461 329.907 167.609 329.772C167.756 329.638 167.848 329.453 167.866 329.254V329.254Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/><path d="M181.4 320.382H179C177.4 320.382 175 320.382 175 317.182C175 320.382 172.6 320.382 171 320.382H168.6" stroke="white" stroke-linecap="round" stroke-linejoin="round"/><path d="M168.416 323.213L171 328.382H179L181.585 323.213" stroke="white" stroke-linecap="round" stroke-linejoin="round"/><path d="M177.473 306.273L176.6 312.382H173.4L172.545 306.396" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    return string(abi.encodePacked(svgStart, first, " ", second, " ", third, svgEnd));
  }

  function pickRandomPhrase(uint256 tokenId, string memory salt) public view returns (string memory) {
    uint256 rand = random(string(abi.encodePacked(salt, Strings.toString(tokenId))));
    rand = rand % phrases.length;
    return phrases[rand];
  }

  function random(string memory input) internal pure returns (uint256) {
      return uint256(keccak256(abi.encodePacked(input)));
  }
}
