import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './views/Main';
import Details from './views/Details';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Details path="/:id" />
      </Router>
    </div>
  );
}

export default App;
