import { web3 } from './web3'

const getAccounts = async function() {
  return await web3.eth.getAccounts()
}

export default getAccounts
