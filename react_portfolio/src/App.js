import React, { Component } from "react";
import './App.css';
import {Link, Route} from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Resume from './Resume'
import { Row, Container, Col } from "reactstrap";
import Logan from './images/logan.png'



class App extends Component {
  constructor() {
    super();
    this.state = {
      Home: ['masterLink', 'Home'],
      Projects: ['masterLink', 'Projects'],
      About: ['masterLink', 'About'],
      Resume: ['masterLink', 'Resume'],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.mouseHovers = this.mouseHovers.bind(this);
    this.mouseExits = this.mouseExits.bind(this)
  }

  componentDidMount () {
    this.setState({
      Home: ['masterLink', 'Home'],
      Projects: ['masterLink', 'Projects'],
      About: ['masterLink', 'About'],
      Resume: ['masterLink', 'Resume'],
    });
  }

  mouseHovers (event) { 
    event.preventDefault()
    console.log('ENTER')
    this.setState({
      [event.target.name]: ['navHover',event.target.name]
    })
  }

  mouseExits (event) {
    event.preventDefault()
    console.log('EXIT')
    this.setState({
      [event.target.name]: ['masterLink',event.target.name]
    })
  }

  render() {

    return (
      <Container className='App'>
        <Row>
          <Col className='nav'>
            <div className='linkWrapper'><Link
            className={this.state.Home[0]}
            name='Home'
            to={'/'}
            onMouseEnter={this.mouseHovers}
            onMouseLeave={this.mouseExits}>
            {this.state.Home[1]}
            </Link></div>
            <div className='linkWrapper'><Link
            className={this.state.Projects[0]}
            name='Projects'
            to={'/projects/'}
            onMouseEnter={this.mouseHovers}
            onMouseLeave={this.mouseExits}>
            {this.state.Projects[1]}
            </Link></div>
            <div className='linkWrapper'><Link
            className={this.state.About[0]}
            name='About'
            to={'/about'}
            onMouseEnter={this.mouseHovers}
            onMouseLeave={this.mouseExits}>
            {this.state.About[1]}
            </Link></div>
            <div className='linkWrapper'><Link
            className={this.state.Resume[0]}
            name='Resume'
            to={'/resume'}
            onMouseEnter={this.mouseHovers}
            onMouseLeave={this.mouseExits}>
            {this.state.Resume[1]}
            </Link></div>        
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
