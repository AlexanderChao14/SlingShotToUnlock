import './App.css';
import PlayZone from './components/PlayZone';
import Combination from './components/Combination';
import {useRef, useState} from 'react';
import ShootBird from './components/ShootBird';

function App() {
  
  const updateCombination = useRef(null);
  const [endPosition, setEndPosition] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  const renderItems =() => {
    if (unlocked) {
      return (
        <div>
          <img src="https://images.theinformr.com/i/features/970/10000003/is-my-phone-unlocked-guide.png" alt='phone-unlocked'></img>
        </div>
      );
    }
    return (
      <div>
         <Combination updateCombinationFunc={updateCombination} setUnlocked={setUnlocked}/>
        <PlayZone updateCombination={updateCombination} shootFunc = {shootFunc} setEndPosition = {setEndPosition}/>
        {birdState["isBirdShot"] ? <ShootBird birdState={birdState} endPosition={endPosition} /> : <></>}
      </div>
    );
  }
  
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
      {renderItems()}
    </div>
  );
}

export default App;
