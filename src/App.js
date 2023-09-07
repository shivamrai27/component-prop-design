import img from './img.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <p>
          You <code>are </code>watching masters of work.
        </p>
        <a
          className="App-link"
          href="https://github.com/shivamrai27"
          target="_blank"
          rel="noopener noreferrer" >
          5S
        </a>
      </header>
    </div>
  );
}

export default App;
