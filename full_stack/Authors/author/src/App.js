import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AuthorMain from './views/AuthorMain';
import EditAuthor from './views/EditAuthor';
import NewAuthor from './views/NewAuthor';


import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
          <AuthorMain path="/" />
          <EditAuthor path="/edit/:id" />
          <NewAuthor path="/new" />
      </Router>
    </div>
  );
}

export default App;
