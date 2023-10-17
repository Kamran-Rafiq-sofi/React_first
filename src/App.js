import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>Hello! World</h1>
        <p> This is my first react app using create-react-app method</p>
      <ul>
        <li>Create folder</li>
        <li>enter folder</li>
        <li>create react app</li>
        <li>use npm start to start the project</li>
      </ul>
      </header>
      
    </div>
  );
}

export default App;
