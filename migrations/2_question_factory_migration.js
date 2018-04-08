const QuestionFactory = artifacts.require("QuestionFactory")

module.exports = function(deployer) {
  deployer.deploy(QuestionFactory)
}
