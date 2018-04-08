import Web3 from 'web3'

const provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545')
const web3 = new Web3(provider)

export { web3, provider }
