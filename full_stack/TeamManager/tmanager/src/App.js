import React from 'react';
import './App.css';
import Main from './views/Main';
import { Router } from '@reach/router';
import AddPlayer from './views/AddPlayer';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/players/list" />
        <AddPlayer path="/players/add" />
      </Router>
    </div>
  );
}

export default App;
