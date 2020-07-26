import React from 'react';
import './App.css';
import Main from './views/Main';
import {Router, Link, navigate} from '@reach/router';
import Page1 from './views/Page1';
import Page2 from './views/Page2';
import styles from './components/test.module.css';



function App() {

  return (
    <div className="App">
      <p>WHAT UP SON</p>
      <Main />
    </div>
  );
}

export default App;
