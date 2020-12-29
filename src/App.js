import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/pages/Home";
import Experience from "./Components/pages/Experience";
import Projects from "./Components/pages/Projects";
import AboutMe from "./Components/pages/AboutMe";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Experience" exact component={Experience} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/AboutMe" exact component={AboutMe} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
