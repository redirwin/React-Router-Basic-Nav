import React from "react";
import "./App.css";
import { Home, About, Contact, Navigation } from "./components";
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" />
    <Route path="/about" />
    <Route path="/contract" />
  </div>
);

export default App;
