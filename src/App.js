import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import ListeProducts from "./ListeProducts";
import ListePanel from "./ListePanel";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/panel">Panel</Link>
      <Switch>
        <Route exact path="/" component={ListeProducts}></Route>
        <Route exact path="/" component={ListePanel}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
