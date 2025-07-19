import React from 'react';
import './Welcome.css';
import SearchBar from './SearchBar';

function Welcome() {
  const handleSearch = (query) => {
    console.log("searching for:", query);
  }

  return (
    <div className='position'>
      <div className='welcome'>
        <div className='layer'>
          <h1 className='shadow'>Welcome to <span>AniBlog!</span></h1>
          <h1 className='gradient'>Welcome to <span>AniBlog!</span></h1>
        </div>
        <p>Search your favorite Anime:</p>
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  )
}

export default Welcome
