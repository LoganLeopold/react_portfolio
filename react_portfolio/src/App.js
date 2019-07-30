import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'
import Projects from "./Projects"
import { Row, Container, Col } from "reactstrap";

function App() {
  return (
    <div className="App">
      <nav>
        <Link className='homepage' to={'/'}>          Logan</Link>
        <Link className='projects' to={'/projects/'}> Projects</Link>
        <Link className='about'    to={'/about'}>     About</Link>
        <Link className='resume'   to={'/resume'}>    Resume</Link>
      </nav>
      <main>
        <Route path='/projects' exact render={routerProps => <Projects {...routerProps}/> } />
      </main>
    </div>
  );
}

export default App;
