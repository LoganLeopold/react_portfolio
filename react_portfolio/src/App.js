import React, { Component } from "react";
import './App.css';
import {Link, Route} from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Resume from './Resume'
import { Row, Container, Col } from "reactstrap";
import './images/coffee.jpg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      Home: '',
      Projects: '',
      About: '',
      Resume: '',
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.changeLinkBackground = this.changeLinkBackground.bind(this);
    this.changeLinkText = this.changeLinkText.bind(this)
  }

  componentDidMount () {
    this.setState({
      Home: 'Logan',
      Projects: 'Projects',
      About: 'About',
      Resume: 'Resume',
    })
  }

  changeLinkBackground (event) { 

    let projectsImg = <img src='./images/coffee.jpg' alt='' className='imgLink'></img>
  
    let state = event.target.name
    
    this.setState({
      [state]: projectsImg
    })
  }

  changeLinkText (event) {
    let state = event.target.name

    this.setState({
      [state]: state
    })
  }

  render() {
    return (
      <Container className='App'>
        <Row className='nav'>
          <Col className='nav'>
            <Link className='homepage masterLink' name='Home' to={'/'}>{this.state.Home}</Link>
            <Link className='projects masterLink' name='Projects' onMouseEnter={this.changeLinkBackground.bind(this)} 
            // onMouseLeave={this.changeLinkText.bind(this)} 
            to={'/projects/'}>{this.state.Projects}</Link>
            <Link className='about masterLink'    name='About' to={'/about'}>{this.state.About}</Link>
            <Link className='resume masterLink'   name='Resume' to={'/resume'}>{this.state.Resume}</Link>        
          </Col>
          <Col className='main'>
            <Route path='/' exact render={routerProps => <Home {...routerProps}/> } />
            <Route path='/projects' exact render={routerProps => <Projects {...routerProps}/> } />
            <Route path='/about' exact render={routerProps => <About {...routerProps}/> } />
            <Route path='/resume' exact render={routerProps => <Resume {...routerProps}/> } />
          </Col>  
          <Col className='photo'>
            <h3 className='instaHandle'>
              Photography by <a href='http://www.instagram.com/loganleopold' className='instaLink'>Logan Leopold</a>
            </h3>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default App;