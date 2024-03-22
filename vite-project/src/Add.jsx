
// Add.js
import React, { useState } from 'react';

const Add = ({ addTransaction }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(formData);
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="add-container">
          <div className="date">
            <label htmlFor="date">Date:</label>
            <input 
            className='input-add'
              type="text"
              id="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="description">
            <label htmlFor="description">Description:</label>
            <input
             className='input-add'
              type="text"
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description..."
            />
          </div>
          <div className="category">
            <label htmlFor="category">Category:</label>
            <input
             className='input-add'
              type="text"
              id="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category..."
            />
          </div>
          <div className="amount">
            <label htmlFor="amount">Amount:</label>
            <input
             className='input-add'
              type="number"
              step=".01"
              id="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Amount..."
            />
          </div>
        </div>
        <div className="btn">
          <button className="btn-box" type="submit">
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;




