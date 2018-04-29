import React from 'react'
import Question from './question'
import { connect } from 'react-redux'
import factoryContract from '../contracts/question_factory'
import getAccounts from '../eth_accounts'

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  async componentDidMount() {
    const questions = await this.getQuestions()
    this.props.handleClick(questions)
  }

  async getQuestions() {
    const instance = await factoryContract.deployed()
    const questions = await instance.getQuestions.call()

    return questions
  }

  async addQuestion() {
    const instance = await factoryContract.deployed()
    const accounts = await getAccounts()
    await instance.createQuestion(this.state.value, {from: accounts[0], gas: 1000000 })

    const questions = await this.getQuestions()
    this.props.handleClick(questions)

    this.setState({value: ''})
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        { this.props.questions.map((question, index) => {
          return <Question address={question} key={index} />
        }) }

        <input type="text" value={this.state.value}  onChange={(e) => { this.handleChange(e) } }/>
        <input type="submit" value="Submit" onClick={ () => { this.addQuestion() } }/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { questions: state.questions }
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: (questions) => {
      return dispatch({type: 'GET_QUESTIONS', questions: questions })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions)
