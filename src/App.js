// import logo from './logo.svg';
import ImgA from './logoshipix.png';
import ImgB from './shipixjapan.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ImgA} alt="monLogo"height="300px"width="250px"/>
        <img src={ImgB} alt="monLogo"height="300px"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
