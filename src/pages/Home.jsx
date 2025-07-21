import React from 'react';

import './Home.css';
import Welcome from '../components/Welcome';
import Review from '../components/ReviewMenu';
import Footer from '../components/Footer';

function Home() {
  
  return (
    <div className='hm'>
      <Welcome/>

      <div className="test">
        <Review />
      </div>

      <div className="test"> 
        <Review />
      </div>
    </div>
  )
}

export default Home;