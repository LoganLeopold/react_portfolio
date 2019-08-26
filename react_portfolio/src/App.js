import React, { Component } from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
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
      Home: ["masterLink", "Home", './images/logan.png'],
      Projects: ["masterLink", "Projects", './images/logan.png'],
      About: ["masterLink", "About", './images/logan.png'],
      Resume: ["masterLink", "Resume", './images/logan.png']
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.mouseHovers = this.mouseHovers.bind(this);
    this.mouseExits = this.mouseExits.bind(this);
  }

  componentDidMount() {
    this.setState({
      Home: ["masterLink", "Home", './images/logan.png'],
      Projects: ["masterLink", "Projects", './images/logan.png'],
      About: ["masterLink", "About", './images/logan.png'],
      Resume: ["masterLink", "Resume", './images/logan.png'],
    });
  }

  mouseHovers(event) {
    event.preventDefault();

    var url = this.state[event.target.name][2]
    console.log(url)

    var navHover = {
      background: 'url(' + url + ')',
    } 

    this.setState(
      {
      [event.target.name]: ["navHover", event.target.name, url, navHover]
    });

  }
  
  mouseExits(event) {
    event.preventDefault();

    var url = this.state[event.target.name][2]

    this.setState({
      [event.target.name]: ["masterLink", event.target.name, url]
    });

    console.log(this.state[event.target.name])
  
  }

  render() {
    return (
      <Container className="App">
        <Row>
          <Col className="nav">
            <div className="linkWrapper">
              <Link
                className={this.state.Home[0]}
                style={this.state.Home[3]}
                name="Home"
                to={"/"}
                onMouseEnter={this.mouseHovers}
                onMouseLeave={this.mouseExits}
              >
                {this.state.Home[1]}
              </Link>
            </div>
            <div className="linkWrapper">
              <Link
                className={this.state.Projects[0]}
                style={this.state.Projects[3]}
                name="Projects"
                to={"/projects/"}
                onMouseEnter={this.mouseHovers}
                onMouseLeave={this.mouseExits}
              >
                {this.state.Projects[1]}
              </Link>
            </div>
            <div className="linkWrapper">
              <Link
                className={this.state.About[0]}
                style={this.state.About[3]}
                name="About"
                to={"/about"}
                onMouseEnter={this.mouseHovers}
                onMouseLeave={this.mouseExits}
              >
                {this.state.About[1]}
              </Link>
            </div>
            <div className="linkWrapper">
              <Link
                className={this.state.Resume[0]}
                // style={this.state.Resume[3]}
                style={{backgroundImage: `url(${Logan})`}}
                name="Resume"
                to={"/resume"}
                onMouseEnter={this.mouseHovers}
                onMouseLeave={this.mouseExits}
              >
                {this.state.Resume[1]}
              </Link>
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


     // margin: '0 3vw',
      // padding: '0',
    
      // color: 'rgba(0, 0, 0, 0)',
      // fontSize: '3vh',
      // fontWeight: 'bold',
      // textShadow: '0px 1.5px 2px rgb(0, 0, 0, 0)',
    
      // display: 'flex',
      // alignItems: 'center',
      // textAlign: 'center',
      // justifyContent: 'center',
    
      // height: '15vh',
      // width: '6.5vw',
    
      // textDecoration: 'none',
    
      // backgroundPosition: 'top center',
      // backgroundSize: '90%',   


  // var masterLink = {
  //   margin: '0 3vw',
  //   padding: '0',
  
  //   color: 'white',
  //   fontSize: '3vh',
  //   fontWeight: 'bold',
  //   textShadow: '0px 1.5px 2px rgb(0, 0, 0, .08)',
  
  //   display: 'flex',
  //   textAlign: 'center',
  //   justifyContent: 'center',
  //   alignContent: 'center',
  //   alignItems: 'center',
  
  //   height: '15vh',
  //   width: '6.5vw',
  // }