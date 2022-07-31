import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home'
import AboutMe from './components/AboutMe';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/Aboutme">
            <AboutMe />
          </Route>
            
            {/* <Services /> */}
            {/* <Details /> */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;
