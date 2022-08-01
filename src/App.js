import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home'
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Details from './components/Details';


import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
            {/* <Details /> */}
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
