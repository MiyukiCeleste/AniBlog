import React from 'react';
import Star from '../assets/smallstar.svg'

const RatingSummary = ({ ratings }) => {
    const count = ratings.length;
    const average = count === 0 ? 0 : ratings.reduce((a, b) => a + b, 0) / count;
  
    return (
        <div className='summary'>
            <img src={Star} />
            <p>{average.toFixed(1)}</p>
        </div>
    )
}

export default RatingSummary;
