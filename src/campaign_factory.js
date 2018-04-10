import { web3, provider } from './web3'
import Contract from 'truffle-contract'

import factory from '../build/contracts/QuestionFactory.json'
const contract = Contract(factory)

contract.setProvider(provider)
if (typeof contract.currentProvider.sendAsync !== "function") {
  contract.currentProvider.sendAsync = function () {
    return contract.currentProvider.send.apply(
      contract.currentProvider, arguments
    )
  }
}

// debugger
// const contract = new web3.eth.Contract(
//   factory.abi,
//   '0x9f544a3fc3d1045e6ec49d4ecef6dcd700457165'
// )

export default contract
