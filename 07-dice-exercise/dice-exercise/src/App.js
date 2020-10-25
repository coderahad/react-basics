import logo from './logo.svg';
import Die from './Die';
import './App.css';

function App() {
  return (
    <div className="App">
      <Die face="five"/>
      <Die face="six"/>
      <Die face="three"/>
      <Die face="two"/>
      <Die face="one"/>
      <Die face="four"/>
    </div>
  );
}

export default App;
