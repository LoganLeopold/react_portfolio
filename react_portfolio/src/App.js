import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'
import Projects from "./Projects"
import { Row, Container, Col } from "reactstrap";

function App() {
  return (
  <Container>
    <Row>
      <Col><Link className='homepage underline' to={'/'}>          Logan</Link></Col>
      <Col><Link className='projects underline' to={'/projects/'}> Projects</Link> </Col>
      <Col><Link className='about underline'    to={'/about'}>     About</Link></Col>
      <Col><Link className='resume underline'   to={'/resume'}>    Resume</Link></Col>
    </Row>
    <main>
      <Route path='/projects' exact render={routerProps => <Projects {...routerProps}/> } />
    </main>
  </Container>
  );
}

export default App;
