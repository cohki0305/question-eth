import React from 'react'
import factoryContract from '../contracts/question_factory'
import Question from './question'

class Questions extends React.Component {
  async componentDidMount() {
    const instance = await factoryContract.deployed()
    const questions = await instance.getQuestions.call()
    this.setState({ questions })
  }

  questionItems() {
    if (!this.state) {
      return null
    }
    return this.state.questions.map((question) => {
      return <Question address={question} />
    })
  }

  render() {
    return (
      <div>
        { this.questionItems() }
      </div>
    )
  }
}

export default Questions
