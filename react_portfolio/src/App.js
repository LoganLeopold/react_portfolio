import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'
import Projects from "./Projects"
import About from './About'
import Resume from './Resume'
import { Row, Container, Col } from "reactstrap";

function App() {
  return (
    <Container className='App'>
      {/* <Row className='header'>
        <Col>
          <header>
            Logan Leopold
          </header>
        </Col>
      </Row> */}
      <Row className='nav'>
        <Col>
          <Link className='homepage' to={'/'}>Logan</Link>
          <Link className='projects' to={'/projects/'}>Projects</Link>
          <Link className='about'    to={'/about'}>About</Link>
          <Link className='resume'   to={'/resume'}>Resume</Link>
        </Col>
      </Row> 
      <Row className='main'> 
        <Col>
          <Route path='/projects' exact render={routerProps => <Projects {...routerProps}/> } />
          <Route path='/about' exact render={routerProps => <About {...routerProps}/> } />
          <Route path='/resume' exact render={routerProps => <Resume {...routerProps}/> } />
        </Col>  
      </Row>
    </Container>
  );
}


export default App;