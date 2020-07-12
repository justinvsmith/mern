import React, {useState} from 'react';
import './App.css';
import BForm from './Components/BForm';
import Boxes from './Components/Boxes';


function App() {
  const [boxes, setBoxes] = useState([]);

  return (
    <div className="App">
      <BForm boxes={boxes} setBoxes={setBoxes} />
      <Boxes boxes={boxes}  />
    </div>
  );
}

export default App;
