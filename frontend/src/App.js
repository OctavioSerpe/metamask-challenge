import TextDisplay from './TextDisplay';
import React, { useState } from 'react';
import axios from 'axios';

const App = (props) => {

  const [data, setData] = useState({ address: "0x0", amount: "0" })

  const sendData = async () => {
    try {
      await axios.post("http://localhost:5000/address-data", data);
    } catch (err) {
      alert(`Error on post: ${err.message}`);
    }
  }

  return (
    <div>
      <TextDisplay title="Address" text={data.address} />
      <TextDisplay title="Amount" text={data.amount} />
      <button onClick={sendData}>Log data</button>
    </div>
  )
}
export default App;
