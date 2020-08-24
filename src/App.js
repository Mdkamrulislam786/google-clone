import React from "react";
import "./App.css";
//React-router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Home from "./Components/Home/Home";
import SearchPage from "./Components/SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search" exact component={SearchPage} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
