import React from 'react';
import Questions from './components/questions'
// import { web3, provider } from 'web3'
// import contract from './campaign_factory'
// import getAccounts from './eth_accounts'

class App extends React.Component {
  render () {
    return (
      <div>
        <Questions />
      </div>
    );
  }
}

export default App
