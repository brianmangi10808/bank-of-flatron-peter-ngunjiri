import React, { useState } from 'react';
import data from "../db.json";
import Search from './Search'; // Import the Search component

const Transactionlist = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter transactions based on the search query
  const filteredTransactions = data.transactions.filter(transaction =>
    transaction.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (typeof transaction.amount === 'string' && transaction.amount.toLowerCase().includes(searchQuery.toLowerCase()))
);


  return (
    <div>
      <Search searchQuery={searchQuery} onSearchChange={handleSearchChange} /> {/* Pass searchQuery and onSearchChange props */}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactionlist;
