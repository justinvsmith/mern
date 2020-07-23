import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Books from './components/Books';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Books path="/books" />
      </Router>
    </div>
  );
}

export default App;
