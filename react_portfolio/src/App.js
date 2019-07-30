import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'
import Projects from "./Projects"
import About from './About'
import Resume from './Resume'
// import { Row, Container, Col } from "reactstrap";

function App() {
  return (
    <div className="App">
      <nav>
        <Link className='homepage' to={'/'}>Logan</Link>
        <Link className='projects' to={'/projects/'}>Projects</Link>
        <Link className='about'    to={'/about'}>About</Link>
        <Link className='resume'   to={'/resume'}>Resume</Link>
      </nav>
      <main>
        <Route path='/projects' exact render={routerProps => <Projects {...routerProps}/> } />
        <Route path='/about' exact render={routerProps => <About {...routerProps}/> } />
        <Route path='/resume' exact render={routerProps => <Resume {...routerProps}/> } />
      </main>
    </div>
  );
}

export default App;
