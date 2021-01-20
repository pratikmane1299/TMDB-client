import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { getMovies } from './services/movies';
import Movie from './components/Movie';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(1)
      .then(data => setMovies(data.results));
  }, []);

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
      </main>
    </>
  );
}

export default App;
