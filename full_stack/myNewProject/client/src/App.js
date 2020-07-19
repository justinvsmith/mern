import React from 'react';
import './App.css';
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="people/" />
        <Details path="people/:id" />
        <Update path="people/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
