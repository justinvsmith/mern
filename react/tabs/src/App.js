import React, {useState} from 'react';
import './App.css';
import Tab from './components/Tab';

function App() {
  const [items, setItems] = useState([
    {item: "", content: ""},
]);
  return (
    <div className="App">
      <Tab items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
