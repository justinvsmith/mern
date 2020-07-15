import React from 'react';
import './App.css'; 
import { Router } from '@reach/router';
import Home from './components/Home';
import Word from './components/Word';
import FancyWord from './components/FancyWord';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Word path="/:word"/>
        <FancyWord path="/:word/:color/:background"/>
      </Router>
    </div>
  );
}

export default App;
