import logo from "./logo.svg";
import "./App.css";

function App() {
  const features = { a: 2, b: 3 };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React<br></br>
          <Test {...{ ...features }} />
        </a>
      </header>
    </div>
  );
}

const Test = ({ a, b }) => {
  console.log(a, b);
  return (
    <div>
      {a} and {b}
    </div>
  );
};

export default App;
