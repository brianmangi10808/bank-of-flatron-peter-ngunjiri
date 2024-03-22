
import React, { useState } from 'react';
import Transactionlist from './Transactionlist';

import Add from './Add';


const Homepage = () => {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (newTransaction) => {
      setTransactions([...transactions, newTransaction]);
    };

  return (
    <div className='container-main'>
      <div className="heading">
        <h1  className='heading-one'>The Royal Bank of Flation</h1>
        <div className='underline'></div>
      </div>

      <Add addTransaction={addTransaction} />
      <Transactionlist transactions={transactions} />
    </div>
  )
}

export default Homepage
