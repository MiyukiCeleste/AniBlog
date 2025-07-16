import React from 'react';

import './Home.css';

import SearchBar from '../components/SearchBar';
import RateSummary from '../components/RatingSummary';
import TooPerfect from '../assets/tooperfectsaint.png';

function Home() {
  const handleSearch = (query) => {
    console.log("searching for:", query);
  }
  return (
    <div className='hm'>
      <div className='welcome'>
        <div className='layer'>
          <h1 className='shadow'>Welcome to <span>AniBlog!</span></h1>
          <h1 className='gradient'>Welcome to <span>AniBlog!</span></h1>
        </div>
        <p>Search your favorite Anime:</p>
        <SearchBar onSearch={handleSearch} />
      </div>
      
      <div className='feat'>
        <h2>Featured Reviews</h2>
      </div>

      <div className='cardrow1'>
        <a href='' className='card'>
          <img src={TooPerfect} />
          <h3>The Too-Perfect Saint</h3>
        </a>

        <a href='' className='card'>
          <img src={TooPerfect} />
          <h3>The Too-Perfect Saint</h3>
        </a>

        <a href='' className='card'>
          <img src={TooPerfect} />
          <h3>The Too-Perfect Saint</h3>
        </a>

        <a href='' className='card'>
          <img src={TooPerfect} />
          <h3>The Too-Perfect Saint</h3>
        </a>
      </div>

      {/* ____________ */}

      <div className='new'>
        <h2>New Release</h2>
      </div>

      <div className='cardrow2'>
        <a href='' className='card'>
          <img src={TooPerfect} />
          <h3>The Too-Perfect Saint</h3>
        </a>

        <a href='' className='card'>
          <img src={TooPerfect} />
          <h3>The Too-Perfect Saint</h3>
        </a>

        <a href='' className='card'>
          <img src={TooPerfect} />
          <h3>The Too-Perfect Saint</h3>
        </a>

        <a href='' className='card'>
          <img src={TooPerfect} />
          <h3>The Too-Perfect Saint</h3>
        </a>
      </div>
    </div>
  )
}

export default Home;