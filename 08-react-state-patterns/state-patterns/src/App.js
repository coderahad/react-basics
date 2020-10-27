import logo from './logo.svg';
import './App.css';
import ScoreKeeper from './ScoreKeeper';
import IconList from './IconList';
import Ball from './Ball';

function App() {
  return (
    <div className="App">
      <Ball num={17}/>
      <Ball num={9}/>
      <Ball num={14}/>
      <Ball num={22}/>
    </div>
  );
}

export default App;
