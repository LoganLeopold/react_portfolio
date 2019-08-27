import React, { Component } from "react";
import "./App.css";
import { NavLink, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Resume from "./Resume";
import { Row, Container, Col } from "reactstrap";
import Logan from "./images/logan.png";
import myResume from "./images/resume.png";

class App extends Component {
  constructor() {
    const isFalse = () => {
      return false;
    };
    super();
    this.state = {
      Home: ["masterLink", "Home", isFalse],
      Projects: ["masterLink", "Projects", isFalse],
      About: ["masterLink", "About", isFalse],
      Resume: ["masterLink", "Resume", isFalse],
      mobile: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.mouseHovers = this.mouseHovers.bind(this);
    this.mouseExits = this.mouseExits.bind(this);
  }

  // isTrue || isFalse controls active React style i.e. will img show or no
  //        If this is mobile I need to disable it so it doesn't mess the vibe up
  //        If this is a desktop I need to enable it so it shows up perfectly
  // When the component mounts, I can decide if it is a mobile or not
  //       This will inform the type of :hover pseudo class styling I allow 
  componentDidMount() {

    const isFalse = () => {
      return false;
    };

    var mobileClient = ''

    if ("maxTouchPoints" in navigator) {
      mobileClient = navigator.maxTouchPoints > 0;
    } else if ("msMaxTouchPoints" in navigator) {
      mobileClient = navigator.msMaxTouchPoints > 0;
    } else {
      mobileClient= false;
    }

    this.setState({
      Home: ["masterLink", "Home", isFalse],
      Projects: ["masterLink", "Projects", isFalse],
      About: ["masterLink", "About", isFalse],
      Resume: ["masterLink", "Resume", isFalse],
      mobile: mobileClient,
    });
}

  // conditionalCSS () {
  //   var navHover = ''
  //   var mobileHover = ''
  //   if (mobileHover) {
  //     navHover = {
  //       margin: "0 4vw",
  //       padding: "0",

  //       color: "rgba(0,0,0,0)",
  //       fontSize: "2.2vw",
  //       fontWeight: "bold",
  //       textShadow: "0px 1.5px 2px rgb(0, 0, 0, .08)",
  //       textDecoration: "none",

  //       display: "flex",
  //       textAlign: "center",
  //       justifyContent: "center",
  //       alignContent: "center",
  //       alignItems: "center",

  //       height: "15vh",
  //       width: "5vw",

  //       background: "transparent"
  //     };
  //   } else {
  //     navHover = {
  //       margin: "0 4vw",
  //       padding: "0",

  //       color: "white",
  //       fontSize: "2.2vw",
  //       fontWeight: "bold",
  //       textShadow: "0px 1.5px 2px rgb(0, 0, 0, 0)",

  //       display: "flex",
  //       textAlign: "center",
  //       justifyContent: "center",
  //       alignContent: "center",
  //       alignItems: "center",

  //       height: "15vh",
  //       width: "5vw",

  //       textDecoration: "none",

  //       backgroundPosition: "center center",
  //       backgroundSize: "100%"
  //     };
  //   }
  // }

  mouseHovers(event) {
    event.preventDefault();

    const activateHover = () => {
      if (this.state.mobile) {
        return false;
      } else {
        return true
      }
    }

    this.setState({
      [event.target.name]: ["navHover", event.target.name, activateHover]
    });
    
  }

  mouseExits(event) {
    event.preventDefault();

    const isFalse = () => {
      return false;
    };

    this.setState({
      [event.target.name]: ["masterLink", event.target.name, isFalse]
    });
  }

  render() {

        var navHover = {
          margin: "0 4vw",
          padding: "0",

          color: 'rgb(0,0,0,0)',
          fontSize: "2.2vw",
          fontWeight: "bold",
          textShadow: "0px 1.5px 2px rgb(0, 0, 0, 0)",

          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",

          height: "15vh",
          width: "5vw",

          textDecoration: "none",

          backgroundPosition: "center center",
          backgroundSize: "100%"
        }

    return (
      <Container className="App">
        <Row>
          <Col className="nav">
            <div className="linkWrapper">
              <NavLink
                className={this.state.Home[0]}
                activeStyle={{ ...navHover}}
                style={{
                  background: `url(${Logan}) no-repeat`,
                  backgroundSize: 0
                }}
                isActive={this.state.Home[2]}
                name="Home"
                to={"/"}
                onMouseEnter={this.mouseHovers}
                onMouseLeave={this.mouseExits}
              >
                {this.state.Home[1]}
              </NavLink>
            </div>
            <div className="linkWrapper">
              <NavLink
                className={this.state.Projects[0]}
                activeStyle={{ ...navHover}}
                style={{
                  background: `url(${Logan}) no-repeat`,
                  backgroundSize: 0
                }}
                isActive={this.state.Projects[2]}
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
                activeStyle={{ ...navHover}}
                style={{
                  background: `url(${Logan}) no-repeat`,
                  backgroundSize: 0
                }}
                isActive={this.state.About[2]}
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
                activeStyle={{ ...navHover}}
                style={{
                  background: `url(${myResume}) no-repeat`,
                  backgroundSize: 0
                }}
                isActive={this.state.Resume[2]}
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


    // var navHover = {
    //   margin: '0 4vw',
    //   padding: '0',

    //   color: 'white',
    //   fontSize: '2.2vw',
    //   fontWeight: 'bold',
    //   textShadow: '0px 1.5px 2px rgb(0, 0, 0, 0)',

    //   display: 'flex',
    //   textAlign: 'center',
    //   justifyContent: 'center',
    //   alignContent: 'center',
    //   alignItems: 'center',

    //   height: '15vh',
    //   width: '5vw',

    //   textDecoration: 'none',

    //   backgroundPosition: 'center center',
    //   backgroundSize: '100%',
    // }