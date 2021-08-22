import logo from "./logo.svg";
import "./App.css";
import Notes from './container/Notes';

function App() {
  return (
    <div>
      <header>
        <h1>To do list</h1>
        <p>I have 0 tasks</p>
      </header>
      <Notes />
    </div>
  );
}

export default App;
