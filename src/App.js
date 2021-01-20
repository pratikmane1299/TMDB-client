import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { getMovies } from './services/movies';
import Movie from './components/Movie';
import Pagination from './components/Pagination';

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(null);

  useEffect(() => {
    getMovies(page)
      .then(data => {
        setMovies(data.results);
        setTotalItems(data.total_results);
      });
  }, [page]);

  function handlePageChange(page) {
    setPage(page);
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
            <form className="form-inline my-2 my-lg-0 ml-auto">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-secondary my-2 my-sm-0">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <main className="container mt-3">
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
