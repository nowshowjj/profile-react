import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
// import Bio from "./Pages/bio";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      {/* <Route exact path="/bio" component={Bio} /> */}
    </Switch>
  </Router>
);

export default App;
