import React from 'react'
import Question from './question'
import { connect } from 'react-redux'
import factoryContract from '../contracts/question_factory'

class Questions extends React.Component {
  async componentDidMount() {
    const instance = await factoryContract.deployed()
    const questions = await instance.getQuestions.call()
    this.props.handleClick(questions)
  }

  render() {
    return (
      <div>
        { this.props.questions.map((question, index) => {
          return <Question address={question} key={index} />
        }) }
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
