import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Resume from "./Resume";


class App extends Component {

  render() {

    return (
      <div className="App">
          <h1>Logan Leopold</h1>
          <div className="main">
            <Route
              path="/"
              exact
              render={routerProps => <Home {...routerProps} />}
            />
            <Route
              path="/projects"
              exact
              render={routerProps => <Projects {...routerProps} />}
            />
            <Route
              path="/about"
              exact
              render={routerProps => <About {...routerProps} />}
            />
            <Route
              path="/resume"
              exact
              render={routerProps => <Resume {...routerProps} />}
            />
          </div>
      </div>
    );
  }
}

export default App;