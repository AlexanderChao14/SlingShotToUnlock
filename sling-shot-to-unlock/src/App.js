import './App.css';
import Bird from './components/Bird';
import PlayZone from './components/PlayZone';
import Combination from './components/Combination';
import {useRef} from 'react';

function App() {
  const updateCombination = useRef(null);

  return (
    
    <div className="App">
        <Combination updateCombinationFunc={updateCombination}/>
        <PlayZone updateCombination={updateCombination}/>
        
    </div>
  );
}

export default App;
