import React from 'react'
import axios from 'axios'
import Add from './Add'
import { useState } from 'react'
import { useEffect } from 'react'
import Transactionlist from './Transactionlist';
import Search from './Search'; 

function JsonServer() {
 const [data, setData] = useState([])

    useEffect(() => {
 axios.get('http://localhost:3000/transactions')
  .then(res => setData(res.data) )
  .catch(err  => console.log(err))
    }, [])

    const addTransaction = (newTransaction) => {
        axios.post('http://localhost:3000/transactions', newTransaction)
          .then(res => {
            setData([...data, res.data]);
          })
          .catch(err => console.log(err));
      };
    

  return (
    <div>
      <table className='table'>
        <thead>
            <tr>
                <th>date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount ($) </th>
            </tr>
        </thead>
        <tbody>
            {data.map((d,i) => {
                return <tr key={i}>
                 <td> {d.date} </td>
                 <td> {d.description}</td>
                 <td> ${d.category} </td>
                 <td> {d.amount} </td>
                </tr>
            })}
        </tbody>
      </table>
      <Add addTransaction={addTransaction} />
      <Transactionlist transactions={data} />
     
    </div>
  )
}

export default JsonServer
