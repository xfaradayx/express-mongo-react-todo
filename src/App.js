import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './pages/Main/index';
import SidebarState from './context/sidebar/sidebarState';

function App() {
  return (
     <SidebarState> 
      <Router>
        <div className="App">
          <Main />
        </div>
      </Router>
    </SidebarState> 
  );
}

export default App;
