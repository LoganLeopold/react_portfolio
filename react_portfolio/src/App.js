import React, { Component } from "react";
import "./App.css";
import { NavLink, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Resume from "./Resume";
import { Row, Container, Col } from "reactstrap";
import Logan from './images/logan.png'
import myResume from './images/resume.png'

class App extends Component {
  constructor() {
    var initialBackground = {
      background: 'transparent'
    };
    const isFalse = () => {
      return false
    };
    super();
    this.state = {
      Home: ["masterLink", "Home", Logan, initialBackground, isFalse],
      Projects: ["masterLink", "Projects", Logan, initialBackground, isFalse],
      About: ["masterLink", "About", Logan, initialBackground, isFalse],
      Resume: ["masterLink", "Resume", Logan, initialBackground, isFalse]
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.mouseHovers = this.mouseHovers.bind(this);
    this.mouseExits = this.mouseExits.bind(this);
  }

  componentDidMount() {

    var initialBackground = {
      background: 'transparent'
    }

    const isFalse = () => {
      return false
    }

    this.setState({
      Home: ["masterLink", "Home", Logan, initialBackground, isFalse],
      Projects: ["masterLink", "Projects", Logan, initialBackground, isFalse],
      About: ["masterLink", "About", Logan, initialBackground, isFalse],
      Resume: ["masterLink", "Resume", myResume, initialBackground, isFalse],
    });
  }

  mouseHovers(event) {
    event.preventDefault();

    // Trying to prevent hover behavior on mobile devices. 
    function hasTouchScreen () {

      console.log('ScreenTest Run')

      var disableHover = false;

      if ("maxTouchPoints" in navigator) {
          disableHover = navigator.maxTouchPoints > 0
        } else if ("msMaxTouchPoints" in navigator) {
          disableHover = navigator.msMaxTouchPoints > 0
        } else {
          disableHover = true;
        }
        console.log(disableHover)
        return disableHover
      }

      if (hasTouchScreen()) {
        var img = this.state[event.target.name][2]
      
        var adaptableHover = {
          background: `url(${img}) no-repeat`,
        }

        const isTrue = () => {
          return true
        }
        console.log(img)

        this.setState({
          [event.target.name]: ["navHover", event.target.name, img, adaptableHover, isTrue]
        });
      }
  }

  mouseExits(event) {
    event.preventDefault();

    var img = this.state[event.target.name][2]

    const isFalse = () => {
      return false
    }
    const unecessaryStyle = {
      background: null,
    }

    this.setState({
      [event.target.name]: ["masterLink", event.target.name, img, unecessaryStyle, isFalse]
    });
  }

  render() {

    var navHover = {
      margin: '0 4vw',
      padding: '0',
    
      color: 'rgba(0, 0, 0, 0)',
      fontSize: '3vh',
      fontWeight: 'bold',
      textShadow: '0px 1.5px 2px rgb(0, 0, 0, 0)',
    
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    
      height: '15vh',
      width: '5vw',
    
      textDecoration: 'none',
     
      background: 'transparent', 
      backgroundPosition: 'center center',
      backgroundSize: '90%',  
    }

    return (
      <Container className="App">
        <Row>
          <Col className="nav">
            <div className="linkWrapper">
              <NavLink
                className={this.state.Home[0]}
                activeStyle={{...navHover, ...this.state.Home[3]}}
                isActive={this.state.Home[4]}
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
                activeStyle={{...navHover, ...this.state.Projects[3]}}
                isActive={this.state.Projects[4]}
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
                activeStyle={{...navHover, ...this.state.About[3]}}
                isActive={this.state.About[4]}
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
                activeStyle={{...navHover, ...this.state.Resume[3]}}
                isActive={this.state.Resume[4]}
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