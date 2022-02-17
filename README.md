# metamask-challenge

Build a frontend with React, integrated with Metamask via Web3.
Build a backend with Nodejs.

The frontend must have different features
- login with Metamask
- display account address and it's balance
- save account address and it's balance sending them to the backend
- support Rinkeby Test Network

The backend must have different features
- connect to a Mongodb database
- offer a POST endpoint to save account address and it's balance to the Mongodb instance

Another requirement is to make an Ethereum faucet to test the web.

# How to run the project
## Backend
From the root of the project run
```
$ cd backend
$ npm i
$ npm run dev
```
The backend is going to run on port 5000 (if available).

## Frontend
From the root of the project run
```
$ cd frontend
$ npm i
$ npm start
```
The frontend is going to run on port 3000 (if available).

# Web demonstration
## Without an address
![No address](/demonstration/no_address.PNG)

## With an address
![With address](/demonstration/with_address.PNG)

## Mongodb Database
#### Having logged previous account data
![Atlas Mongodb](/demonstration/mongodb.PNG)


#### Useful references
- [Connect to Metamask, React example](https://medium.com/coinmonks/web3-react-connect-users-to-metamask-or-any-wallet-from-your-frontend-241fd538ed39)
- [Web3 docs](https://web3js.readthedocs.io/en/v1.2.9/index.html)
- [Rinkeby Ethereum faucet](https://faucet.rinkeby.io/)
- [Atlas Mongodb](https://www.mongodb.com/atlas/database)