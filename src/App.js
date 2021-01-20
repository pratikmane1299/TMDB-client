import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { getMovies, searchMovies } from './services/movies';

import Movie from './components/Movie';
import Pagination from './components/Pagination';
import SearchBox from './components/SearchBox';

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query !== '' && query.length > 3) {
      searchMovies(query, page)
        .then(data => {
          setMovies(data.results);
          setTotalItems(data.total_results);
        });
    } else {
      getMovies(page)
        .then(data => {
          setMovies(data.results);
          setTotalItems(data.total_results);
        });
    }
  }, [page, query]);

  function handlePageChange(page) {
    setPage(page);
  }

  function handleSearch(q) {
    setQuery(q);
    setPage(1);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="https://reactjs.org" target="blank">
            <img src={logo} alt="react" className="logo" />
            React Pagination
          </a>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <div className="mx-auto w-50">
              <SearchBox value={query} onChange={handleSearch} />
            </div>
          </div>
        </div>
      </nav>
      <main className="container mt-3">
        {query !== '' && (
          <div className="search-result-meta-container">
            <span className="search-result-meta">
              Found <strong>{totalItems}</strong> movies matching <strong>{query}</strong>.
              </span>
            <span
              type="button"
              className="clear-filter-button"
              onClick={() => setQuery('')}
            >
              Clear filter
              </span>
          </div>
        )}
        <div className="row">
          {movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
        <Pagination
          totalItems={totalItems}
          currentPage={page}
          pageSize={20}
          onPageChange={handlePageChange}
        />
      </main>
    </>
  );
}

export default App;
