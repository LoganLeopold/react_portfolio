import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'
import Projects from "./Projects"

function App() {
  return (
  <div>
    <div>This is a placeholder lollerskaat</div>
    <nav className='top'>
      <h1> <Link className='homepage' to={'/'}>          Home</Link></h1>
      <h2> <Link className='projects'  to={'/projects/'}> Projects</Link></h2> 
      <h2> <Link className='about'    to={'/about'}>     About</Link></h2>
      <h2> <Link className='resume'   to={'/resume'}>    Resume</Link></h2>
    </nav>  
    <main>
      <Route path='/projects' exact render={routerProps => <Projects {...routerProps}/> } />
    </main>
  </div>
  );
}

export default App;
