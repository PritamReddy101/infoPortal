import React from "react";
import Contact from "./components/Contact";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./components/Shop";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
        <Route path="/shop">
          <Shop></Shop>
          </Route>
        <Route path="/">
          <Contact></Contact>
          </Route>
          
          </Switch>
      </Router>
    </div>
  );
}

export default App;