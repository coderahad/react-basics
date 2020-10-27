import logo from './logo.svg';
import './App.css';
import ScoreKeeper from './ScoreKeeper';
import IconList from './IconList';
import Ball from './Ball';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Mini Lotto" maxNum={10} numBalls={4}/>
    </div>
  );
}

export default App;
