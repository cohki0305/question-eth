pragma solidity ^0.4.17;

contract Question {
  address public owner;
  string public content;

  function Question(address sender, string _content) public {
    owner = sender;
    content = _content;
  }

  function updateContent(string _content) public {
    content = _content;
  }
}
