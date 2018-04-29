import React from 'react'
import contract from '../contracts/question'

class Question extends React.Component {
  async componentDidMount() {
    const { address } = this.props
    const instance = await contract.at(address)
    const content = await instance.content.call()

    this.setState({ content })
  }

  render() {
    return (
      <li>{ this.state ? this.state.content : '' }</li>
    )
  }
}

export default Question
