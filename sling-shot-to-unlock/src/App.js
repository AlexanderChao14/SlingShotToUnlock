import './App.css';
import Bird from './components/Bird';
import PlayZone from './components/PlayZone';
import Combination from './components/Combination';
import {useRef, useState} from 'react';
import ShootBird from './components/ShootBird';


function App() {
  
  const updateCombination = useRef(null);
  
  const shootFunc = (slingPos, mousePos,  birdT)=>{
    setBirdState(
      {isBirdShot: true,
        birdType: birdT,
        start: mousePos,
        sling: slingPos,
      });
  }
  const [birdState, setBirdState] =useState({isBirdShot: false, birdType: -1});
  
  return (
    
    <div className="App">

        <Combination updateCombinationFunc={updateCombination}/>
        <PlayZone updateCombination={updateCombination} shootFunc = {shootFunc}/>
        {birdState["isBirdShot"] ? <ShootBird birdState={birdState} /> : <></>}
        
    </div>
  );
}

export default App;
