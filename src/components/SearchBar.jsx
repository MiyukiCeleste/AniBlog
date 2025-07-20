import React from 'react';

import { useState } from 'react';
import '../styles/SearchBar.css';
import search1 from '../assets/searchbar/search1.svg';
import search2 from '../assets/searchbar/search2.svg';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');
    const [hovered, setHovered] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()){
            onSearch(query);
        }
    };

    return (
        <form className='searchbar' onSubmit={handleSubmit}>
            <input type='text' placeholder='Search Anime...' value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type='submit' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <img src={hovered ? search2 : search1} />
            </button>
        </form>
    );
}

export default SearchBar;
