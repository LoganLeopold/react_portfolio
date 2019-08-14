import React, { Component } from "react";
import './App.css';
import {Link, Route} from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Resume from './Resume'
import { Row, Container, Col } from "reactstrap";
import coffee from './images/coffee.jpg'

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
    this.mouseHovers = this.mouseHovers.bind(this);
    this.mouseExits = this.mouseExits.bind(this)
  }

  componentDidMount () {
    this.setState({
      Home: false,
      Projects: false,
      About: false,
      Resume: false,
    });
  }

  mouseHovers (event) { 
    // console.log(event.target.name)
    let linkName = event.target.name
    this.setState({
      [linkName]: true
    })
  }

  mouseExits (event) {
    console.log(event.target)
    let linkName = event.target.name
    this.setState({
      [linkName]: false
    })
  }

  render() {

    return (
      <Container className='App'>
        <Row>
          <Col className='nav'>
            <Link 
              className='homepage masterLink' 
              name='Home' 
              to={'/'} 
              onMouseEnter={this.mouseHovers}
              onMouseLeave={this.mouseExits}>
                {this.state.Home ? <img src={coffee} alt='' className='linkImg' ></img> : 'Home'}              
            </Link>
            <Link 
              className='projects masterLink' 
              name='Projects' 
              to={'/projects/'}
              onMouseEnter={this.mouseHovers}
              onMouseLeave={this.mouseExits}>
                {this.state.Projects ? <img src={coffee} alt='' className='linkImg'></img> : 'Projects'}
            </Link>
            <Link 
              className='about masterLink' 
              name='About' 
              to={'/about'}
              onMouseEnter={this.mouseHovers}
              onMouseLeave={this.mouseExits}>
                {this.state.About ? <img src={coffee} alt='' className='linkImg'></img> : 'Projects'}
            </Link>
            <Link 
              className='resume masterLink'   
              name='Resume' 
              to={'/resume'}
              onMouseEnter={this.mouseHovers}
              onMouseLeave={this.mouseExits}>
                {this.state.Resume ? <img src={coffee} alt='' className='linkImg'></img> : 'Resume'}
            </Link>        
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