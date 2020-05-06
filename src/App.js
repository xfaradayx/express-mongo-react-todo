import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './pages/Main/index';
import SidebarState from './context/sidebar/sidebarState';
import HeaderState from './context/header/headerState';


function App() {
  return (
    <HeaderState>
      <SidebarState> 
        <Router>
          <div className="App">
            <Main />
          </div>
        </Router>
      </SidebarState> 
    </HeaderState>
  );
}

export default App;
