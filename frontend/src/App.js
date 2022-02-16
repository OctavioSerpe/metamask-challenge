import TextDisplay from './TextDisplay';
import React, { useState } from 'react';

const App = (props) => {

  const [data, setData] = useState({ address: "0x0", amount: "0" })

  return (
    <div>
      <TextDisplay title="Address" text={data.address} />
      <TextDisplay title="Amount" text={data.amount} />
    </div>
  )
}
export default App;
