import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Resume from './Resume'
import { Row, Container, Col } from "reactstrap";

function App() {
  return (
    <Container className='App'>
      <Row className='nav'>
        <Col>
          <Link className='homepage masterLink' to={'/'}>Logan</Link>
          <Link className='projects masterLink' to={'/projects/'}>Projects</Link>
          <Link className='about masterLink'    to={'/about'}>About</Link>
          <Link className='resume masterLink'   to={'/resume'}>Resume</Link>        
        </Col>
      </Row> 
      <Row className='main'> 
        <Col>
          <Route path='/' exact render={routerProps => <Home {...routerProps}/> } />
          <Route path='/projects' exact render={routerProps => <Projects {...routerProps}/> } />
          <Route path='/about' exact render={routerProps => <About {...routerProps}/> } />
          <Route path='/resume' exact render={routerProps => <Resume {...routerProps}/> } />
        </Col>  
      </Row>
      <h3 className='instaHandle'>
        Photography by <a href='http://www.instagram.com/logankeopold' className='instaLink'>Logan Leopold</a>
      </h3>
    </Container>
  );
}


export default App;