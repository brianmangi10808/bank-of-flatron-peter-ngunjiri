import React from 'react'

const Search = ({ searchQuery, onSearchChange }) => {
  return (
    <div>
        <div className="search-container">
        <input className='input-search' type="text" 
        placeholder='search for recent transaction'
        value={searchQuery} 
        onChange={onSearchChange}
       />
      </div> 
    </div>
  )
}

export default Search 