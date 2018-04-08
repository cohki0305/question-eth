pragma solidity ^0.4.17;

import "./Ownable.sol";
import "./Question.sol";

contract QuestionFactory is Ownable {
  address[] public questions;

  function createQuestion(string content) public {
    address question = new Question(msg.sender, content);
    questions.push(question);
  }

  function getQuestions() public view returns(address[]){
    return questions;
  }
}
