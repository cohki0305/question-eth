import { provider } from '../web3'
import Contract from 'truffle-contract'

import factory from '../../build/contracts/QuestionFactory.json'
const contract = Contract(factory)

contract.setProvider(provider)
if (typeof contract.currentProvider.sendAsync !== "function") {
  contract.currentProvider.sendAsync = function () {
    return contract.currentProvider.send.apply(
      contract.currentProvider, arguments
    )
  }
}


export default contract
