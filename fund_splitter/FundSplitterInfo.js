var web3jsraw = require('web3js-raw');
var BCInfo =  require('../BlockchainInfo');

const Params = {
    ABI:JSON.parse('[ { "constant": false, "inputs": [ { "name": "value", "type": "uint256" } ], "name": "splitFunds", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "index", "type": "uint256" } ], "name": "getFundAt", "outputs": [ { "name": "bal", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "_members", "outputs": [ { "name": "_key", "type": "address" }, { "name": "_balance", "type": "uint256" }, { "name": "_totalTodate", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "disperseFunds", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getMemberCount", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "addFunds", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "_owner", "outputs": [ { "name": "", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "newMember", "type": "address" } ], "name": "addMember", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [ { "name": "index", "type": "uint256" } ], "name": "getMemberAt", "outputs": [ { "name": "mem", "type": "address" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getFundsCount", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "memberAddress", "type": "address" }, { "name": "value", "type": "uint256" } ], "name": "transferFundsToMember", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "addr", "type": "address" } ], "name": "getBalance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "_receivedFunds", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "members", "type": "string" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "SplitRequest", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "message", "type": "string" }, { "indexed": false, "name": "addr", "type": "address" }, { "indexed": false, "name": "num", "type": "uint256" } ], "name": "LogMessage", "type": "event" } ]'),
    ADDRESS: '0x5b7ab83309d7f7c621d9d7505c520a1fde6ae606',
    ETHER_ACC : BCInfo.Params.ETHER_ACC,
    ETHER_PKEY : new Buffer(BCInfo.Params.PVT_KEY, 'hex')
};

function getWeb3R()
{
    var W3JSR = new web3jsraw();
    W3JSR.getWeb3(Params.ABI, Params.ADDRESS, BCInfo.Params.PROVIDER_NODE);

    return W3JSR;
};

module.exports = {getWeb3R, Params};
