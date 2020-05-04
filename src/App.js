import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './pages/Main/index';

function App() {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>
  );
}

export default App;
