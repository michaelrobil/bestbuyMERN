import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar"
import './App.css';
import Bestbuy from './pages/Bestbuy'
import Cart from './pages/Cart'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Bestbuy} />
        <Route exact path="/bestbuy" component={Bestbuy} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
