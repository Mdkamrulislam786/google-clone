import React from "react";
import "./App.css";
//React-router
import { BrowserRouter as Router, Rout, Switch, Route } from "react-router-dom";
//Components
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Home */}
          <Route path="/" exact component={Home} />

          <Route path="/search">
            <h1>We are on the search Page</h1>
          </Route>
        </Switch>
        {/* Result Page */}
      </Router>
    </div>
  );
}

export default App;
