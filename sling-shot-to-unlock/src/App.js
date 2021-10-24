import './App.css';
import Bird from './components/Bird';
import PlayZone from './components/PlayZone';
import Combination from './components/Combination';
import {useRef, useState} from 'react';
import { render } from 'react-dom';
import ShootBird from './components/ShootBird';


function App() {
  
  const updateCombination = useRef(null);
  
  const shootFunc = (slingPos, mousePos,  birdT)=>{

    // console.log("shoot ready ", slingPos, mousePos)
    // console.log(mousePos)
    
    setBirdState({isBirdShot: true,birdType: birdT});
    
  }
  const [birdState, setBirdState] =useState({isBirdShot: false, birdType: -1});
  
  const startShooting = useRef(shootFunc);
  return (
    
    <div className="App">
        {birdState["isBirdShot"] ? <ShootBird birdType={birdState["birdType"]}/> : <></>}
        
        <Combination updateCombinationFunc={updateCombination}/>
        <PlayZone updateCombination={updateCombination} shootFunc = {shootFunc}/>
        
    </div>
  );
}

export default App;
