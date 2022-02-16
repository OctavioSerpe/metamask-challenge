import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Web3ReactProvider } from "@web3-react/core";
// @link = https://github.com/ChainSafe/web3.js/issues/4090
import Web3 from "web3";

const getLibrary = (provider) => {
  return new Web3(provider);
};

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <App />
  </Web3ReactProvider>,
  document.getElementById('root')
);

