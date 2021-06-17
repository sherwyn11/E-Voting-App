# E-Voting App

A simple E-voting Decentralised App using the Ethereum Blockchain, Solidity and the MERN(MongoDB, Express.js, ReactJS, Node.js) stack

<img src="https://ethereum.org/static/c3bcc8c47890ffd2a2c329972c73d0fd/31987/ethereum-logo-portrait-black-gray.png" height="210px" width="360px"/>

<b>Ethereum</b> is an open source, public, blockchain-based distributed computing platform and operating system featuring smart contract functionality.

## About the D-App

The E-Voting app has 2 main users:
1. Admin 
2. Voter

Admin can create an election and add candidates to the Ethereum Blockchain

Users(Voters) can select an election and vote for a candidate of their choice

## Dependencies
<ul>
  <li>Node.js</li>
  <li>npm</li>
  <li>React.js</li>
  <li>Web3.js</li>
  <li>Ganache-cli</li>
  <li>Truffle</li>
  <li>Solidity</li>
  <li>MongoDB</li>
  <li>Metamask</li>
</ul>


## Getting Started

### To deploy the Smart Contract

1. Install Ganache and create a workspace.
2. Install Truffle npm package globally by running ```npm install -g truffle```.
3. Run ```truffle migrate --reset``` from the command line to deploy the smart contract to the blockchain.
4. Download Metamask Chrome extension for the browser to help interaction between the application and the blockchain.


### To run react development server

```bash
cd blockchain
npm start
```

### To run node server
```bash
cd server
npm run dev
```

&copy; 2020 Sherwyn D'souza
