import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Router } from '@reach/router';
import Planets from './views/Planets';
import People from './views/People';
import SearchForm from './components/SearchForm';



function App() {
  

  return (
    <div className="App">
      <SearchForm />
      <Router>
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
      </Router>
    </div>
  );
}

export default App;
