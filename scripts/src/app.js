import React from 'react';
// import { web3, provider } from 'web3'
import contract from './campaign_factory'
import getAccounts from './eth_accounts'

class App extends React.Component {
  async componentDidMount() {
    const accounts = await getAccounts()
    
    const instance = await contract.deployed()
    await instance.createQuestion("toda", {from: accounts[0], gas: 1000000})
    const instance2 = await contract.deployed()
    const questions = await instance2.getQuestions.call()
    console.log(questions)
    console.log(accounts[0])

  }

  render () {
    return (
      <div>
        test
      </div>
    );
  }
}

export default App
