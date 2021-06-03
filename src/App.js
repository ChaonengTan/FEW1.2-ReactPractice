import {useState} from 'react'
import './App.css';
import Counter from './Components/Counter/Counter'
import Counterv2 from './Components/Counterv2/Counterv2'
import TipCalculator from './Components/TipCalculator/TipCalculator';

function App() {
  const [count, setCount] = useState([1, 2])
  return (
    <div className="App">
      {/* Tip Calculator Exersise
      <TipCalculator/> */}

      {/* Counter Exersise
      <Counter step={1} min={0} max={20}/>
      <Counter step={3} min={0} max={20}/>
      <Counter step={50} min={0} max={100}/> */}

      {/* counterv2 */}
      {count.map((val, i) => (
        <Counterv2 
          // key={`counter${i}`}
          label={i}
          value={val}
          deleteCount={() => {
            const newCount = [...count]
            newCount.splice(i, 1)
            setCount(newCount)
          }}
          increment={() => {
            const newCount = [...count]
            newCount[i]++
            setCount(newCount)
          }}
          decrement={() => {
            const newCount = [...count]
            newCount[i]--
            setCount(newCount)
          }}
        />
      ))}
      <h2>Total: {count.reduce((acc, val) => acc + val, 0)}</h2>
      <button onClick={() => {
        const newCount=[...count]
        newCount.push(0)
        setCount(newCount)
      }}>AddCounter</button>
    </div>
  );
}

export default App;