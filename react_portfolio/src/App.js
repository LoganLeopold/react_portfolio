import React, { Component } from "react";
import "./App.css";
import { NavLink, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Resume from "./Resume";
import { Row, Container, Col } from "reactstrap";
import Logan from './images/logan.png'

class App extends Component {
  constructor() {
    super();
    this.state = {
      Home: ["masterLink", "Home", Logan],
      Projects: ["masterLink", "Projects", Logan],
      About: ["masterLink", "About", Logan],
      Resume: ["masterLink", "Resume", Logan]
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.mouseHovers = this.mouseHovers.bind(this);
    this.mouseExits = this.mouseExits.bind(this);
  }

  componentDidMount() {
    this.setState({
      Home: ["masterLink", "Home", Logan],
      Projects: ["masterLink", "Projects", Logan],
      About: ["masterLink", "About", Logan],
      Resume: ["masterLink", "Resume", Logan],
    });
  }

  mouseHovers(event) {
    event.preventDefault();

    var img = this.state[event.target.name][2]

    var adaptableHover = {
      background: `url(${img}) no-repeat`,
    }

    console.log(img)

    this.setState({
      [event.target.name]: ["navHover", event.target.name, img, adaptableHover]
    });
  }

  mouseExits(event) {
    event.preventDefault();

    var url = this.state[event.target.name][2]

    this.setState({
      [event.target.name]: ["masterLink", event.target.name, url]
    });
  }

  render() {
    return (
      <Container className="App">
        <Row>
          <Col className="nav">
            <div className="linkWrapper">
              <NavLink
                className={this.state.Home[0]}
                style={this.state.Home[3]}
                name="Home"
                to= {"/"}
                onMouseEnter={this.mouseHovers}
                onMouseLeave={this.mouseExits}
              >
                {this.state.Home[1]}
              </NavLink>
            </div>
            <div className="linkWrapper">
              <NavLink
                className={this.state.Projects[0]}
                style={this.state.Projects[3]}
                name="Projects"
                to={"/projects/"}
                onMouseEnter={this.mouseHovers}
                onMouseLeave={this.mouseExits}
              >
                {this.state.Projects[1]}
              </NavLink>
            </div>
            <div className="linkWrapper">
              <NavLink
                className={this.state.About[0]}
                style={this.state.About[3]}
                name="About"
                to={"/about"}
                onMouseEnter={this.mouseHovers}
                onMouseLeave={this.mouseExits}
              >
                {this.state.About[1]}
              </NavLink>
            </div>
            <div className="linkWrapper">
              <NavLink
                className={this.state.Resume[0]}
                style={this.state.Resume[3]}
                name="Resume"
                to={"/resume"}
                onMouseEnter={this.mouseHovers}
                onMouseLeave={this.mouseExits}
              >
                {this.state.Resume[1]}
              </NavLink>
            </div>
          </Col>
          <Col className="main">
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
          </Col>
          <Col className="photo">
            <h3 className="instaHandle">
              Photography by{" "}
              <a
                href="http://www.instagram.com/loganleopold"
                className="instaLink"
              >
                Logan Leopold
              </a>
            </h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;