import React, { Component } from "react";
import "./App.css";
import { NavLink, Route } from "react-router-dom";
import NavLinkComponent from "./NavLinkComponent"
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Resume from "./Resume";
import { Row, Container, Col } from "reactstrap";
import Logan from "./images/logan.png";
import myResume from "./images/resume.png";
import ticketTrackr from './images/Ticket_Trackr.png'
import home from './images/home.png'

class App extends Component {
  constructor() {
    const isFalse = () => {
      return false;
    };
    super();
    this.state = {
      mobile: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {

    var mobileClient = ''

    if ("maxTouchPoints" in navigator) {
      mobileClient = navigator.maxTouchPoints > 0;
    } else if ("msMaxTouchPoints" in navigator) {
      mobileClient = navigator.msMaxTouchPoints > 0;
    } else {
      mobileClient= false;
    }

    this.setState({
      mobile: mobileClient,
    });
}

  render() {

    return (
      <Container className="App">
        <Row>
          <Col className="nav">
            <NavLinkComponent image={home} linkname="Home" to={"/"} {...this.state} {...this.props} />
            <NavLinkComponent image={ticketTrackr} linkname='Projects' to={'/projects/'} {...this.state} {...this.props} />
            <NavLinkComponent image={Logan} linkname="About" to={"/about"} {...this.state} {...this.props} />
           <NavLinkComponent image={myResume} linkname="Resume" to={"/resume"} {...this.state} {...this.props} />
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
                <span className='sizeControl'>Logan Leopold</span>
              </a>
            </h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;