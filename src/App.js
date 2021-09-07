import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import RouteComponent from "./utils/router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <RouteComponent />
      </Router>
    </div>
  );
}

export default App;
