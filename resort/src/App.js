import React from 'react';

import './App.css';

import Home from './pages/Home';
import Rooms  from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import { Route , Switch } from 'react-router-dom';
//Importing components
import NavBar from './components/Navbar';

function App() {
  return (
  < >
  <NavBar />
  <Switch>
  <Route exact path="/" component = {Home}/>
  <Route exact path="/rooms/" component = {Rooms}/>
  <Route exact path="/rooms/:slug" component = {SingleRoom}/>
  <Route component = {Error} />
  </Switch>
   </>
  );
}

export default App;
