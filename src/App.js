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
import Login from './components/Login';


function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Sw>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/detail/:id">
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
