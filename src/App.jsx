import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import MovieSearch from './components/MovieSearch';
import Hero from './components/Hero';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import './css/index.css';

const App = () => {
  const allMovies = [
    {
      id: 1,
      title: "Interstellar",
      rating: 4.5,
      genre: "Sci-Fi",
      duration: "169 min",
      image: "https://dummyimage.com/300x450/000/fff",
      description: "A team of explorers travel through a wormhole in space.",
      showTimes: ["2:30 PM", "5:45 PM", "9:00 PM"]
    },
    {
      id: 2,
      title: "Inception",
      rating: 4.8,
      genre: "Thriller",
      duration: "148 min",
      image: "https://dummyimage.com/300x450/000/fff",
      description: "A skilled thief enters people's dreams to steal secrets.",
      showTimes: ["1:00 PM", "4:15 PM", "7:30 PM", "10:45 PM"]
    },
    {
      id: 3,
      title: "The Matrix",
      rating: 4.7,
      genre: "Action",
      duration: "136 min",
      image: "https://dummyimage.com/300x450/000/fff",
      description: "A computer hacker learns about the true nature of reality.",
      showTimes: ["3:00 PM", "6:15 PM", "9:30 PM"]
    },
    {
      id: 4,
      title: "Blade Runner 2049",
      rating: 4.4,
      genre: "Sci-Fi",
      duration: "164 min",
      image: "https://dummyimage.com/300x450/000/fff",
      description: "A new blade runner unearths a long-buried secret.",
      showTimes: ["2:00 PM", "5:30 PM", "9:15 PM"]
    },
    {
      id: 5,
      title: "Dune",
      rating: 4.6,
      genre: "Sci-Fi",
      duration: "155 min",
      image: "https://dummyimage.com/300x450/000/fff",
      description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset.",
      showTimes: ["1:30 PM", "4:45 PM", "8:00 PM"]
    }
  ];

  const [displayedMovies, setDisplayedMovies] = useState(allMovies);
  const [searchActive, setSearchActive] = useState(false);

  const handleSearch = (searchTerm) => {
    setSearchActive(true);
    
    // Short delay to simulate loading
    setTimeout(() => {
      if (!searchTerm.trim()) {
        setDisplayedMovies(allMovies);
      } else {
        const filtered = allMovies.filter(movie => 
          movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          movie.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          movie.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setDisplayedMovies(filtered);
      }
      setSearchActive(false);
    }, 300);
  };

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Hero />
        <section id="movies" className="section section--movies">
          <div className="container">
            <h2 className="section__title c-primary">Search</h2>
            <div className={`search-container ${searchActive ? 'search-loading' : ''}`}>
              <MovieSearch onSearch={handleSearch} />
            </div>
            
            {displayedMovies.length > 0 ? (
              <MovieList movies={displayedMovies} />
            ) : (
              <div className="no-results text-center">
                <p className="c-secondary">No movies found matching your search criteria.</p>
                <button 
                  className="btn btn--primary mt-4"
                  onClick={() => handleSearch('')}
                >
                  Show All Movies
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
