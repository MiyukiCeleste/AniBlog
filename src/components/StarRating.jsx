import React, { useState } from 'react';
import '../styles/StarRating.css';
import filledStar from '../assets/filledstar.svg';
import halfStar from '../assets/halfstar.svg';
import emptyStar from '../assets/emptystar.svg';

const StarRating = ({ rating, onChange, totalStars = 5, readOnly = false, size = 'medium'}) => {
    const [hover, setHover] = useState(0);
    const displayRating = hover || rating;

    const handleClick = (value) => {
        if(!readOnly && onChange) onChange(value);
    };

    return (
        <div className={`starrating ${size}`}>
            {[...Array(totalStars)].map((_, index) => {
                const value = index + 1;
                
                let starIcon;
                if (value <= Math.floor(displayRating)) {
                    starIcon = filledStar;
                }
                else if (value === Math.ceil(displayRating) && displayRating % 1 !== 0){
                    starIcon = halfStar;
                }
                else {
                    starIcon = emptyStar;
                }

                return (
                    <img key={value} className='star'
                    src={starIcon}
                    onClick={() => handleClick(value)}
                    onMouseEnter={() => !readOnly && setHover(value)}
                    onMouseLeave={() => !readOnly && setHover(0)}
                    style={{
                        cursor: readOnly ? 'default' : 'pointer',
                        transition: 'transform 0.2s',
                    }}
                    />
                );
            })}
        </div>
    );
};

export default StarRating;
