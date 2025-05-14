import React, { useState } from 'react';

const MovieSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  
  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search movies..."
            className="search__input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search__button" aria-label="Search movies">
            🔍
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieSearch;