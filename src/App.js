import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter/Counter'
import TipCalculator from './Components/TipCalculator/TipCalculator';

function App() {
  return (
    <div className="App">
      Tip Calculator Exersise
      <TipCalculator/>

      {/* Counter Exersise
      <Counter step={1} min={0} max={20}/>
      <Counter step={3} min={0} max={20}/>
      <Counter step={50} min={0} max={100}/> */}
    </div>
  );
}

export default App;
