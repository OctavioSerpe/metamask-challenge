import TextDisplay from "./TextDisplay";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { injectedConnector } from "./walletConnector";
import { useWeb3React } from "@web3-react/core";

const App = (props) => {

  const { active, account, library, activate, deactivate } = useWeb3React();

  const defaultData = { address: "-", balance: "-" };
  const [data, setData] = useState(defaultData)

  useEffect(() => {
    if (active && library) {
      library.eth.getBalance(account).then((balance) => {
        balance = library.utils.fromWei(balance, "ether");
        setData({ address: account, balance });
      }).catch((err) => {
        alert(`Error on getting balance: ${err.message}`);
      });
    } else {
      setData(defaultData);
    }
  }, [account, library, active]);

  const connect = async () => {
    try {
      await activate(injectedConnector);
    } catch (err) {
      alert(`Error on connection to Metamask: ${err.message}`);
    }
  };

  const disconnect = () => {
    try {
      deactivate();
    } catch (err) {
      alert(`Error on disconnection from Metamask: ${err.message}`);
    }
  };

  const sendData = async () => {
    try {
      await axios.post("http://localhost:5000/address-data", data);
    } catch (err) {
      alert(`Error on post: ${err.message}`);
    }
  };

  return (
    <div>
      {active ?
        <button onClick={disconnect}>Disconnect from Metamask</button>
        :
        <button onClick={connect}>Connect to Metamask</button>
      }
      <TextDisplay title="Address" text={data.address} />
      <TextDisplay title="Balance" text={`${data.balance} ETH`} />
      <button onClick={sendData}>Log data</button>
    </div>
  );
}
export default App;
