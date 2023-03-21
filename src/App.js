import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import {
  BrowserRouter as Router,
  Switch as Sw,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Sw>
          <Route path="/details">
              <Details />
          </Route>  
          <Route path="/">
              <Home />
          </Route>  
        </Sw>
      </Router>

    </div>
  );
}

export default App;
