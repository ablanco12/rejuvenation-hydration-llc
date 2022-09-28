import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home'
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Details from './components/Details';
import Hero from './components/Hero';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div style={{textAlign: 'center'}}>
      <Router>
        <NavBar />
        <Hero />
        <Switch>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/services">
            <Services />
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
