import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="https://reactjs.org" target="blank">
            <img src={logo} alt="react" className="logo" />
            React Pagination
          </a>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <form class="form-inline my-2 my-lg-0 ml-auto">
              <input class="form-control mr-sm-2" type="text" placeholder="Search" />
              <button class="btn btn-secondary my-2 my-sm-0">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <main className="container mt-4">
        <p>React Pagination Example</p>
      </main>
    </>
  );
}

export default App;
