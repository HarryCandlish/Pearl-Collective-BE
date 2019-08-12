import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./layout/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
