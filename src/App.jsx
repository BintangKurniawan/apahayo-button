import { useState } from "react";

import "./App.css";
import React from "react";
import Nav from "./components/nav";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ResponsiveNav from "./components/ResponsiveNav";
function App() {
  return (
    <div className="app">
      <Nav />
      <ResponsiveNav />
    </div>
  );
}

export default App;
