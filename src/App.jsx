import { useState } from "react";

import "./App.css";
import React from "react";
import Nav from "./components/nav";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ResponsiveNav from "./components/ResponsiveNav";
import Home from "./components/Home";
function App() {
  return (
    <div className="app">
      <Nav />
      <ResponsiveNav />
      <Home />
    </div>
  );
}

export default App;
