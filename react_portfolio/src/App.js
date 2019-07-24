import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'
import Projects from "./Projects"

function App() {
  return (
  <div>
    <div>This is a placeholder lollerskaat</div>
    <nav className='top'>
     <h1> <Link className='homepage' to='/'>Home</Link></h1>
     <h2> <Link to={'/project/'}>Project 1</Link></h2> 
     </nav>  
    <main>
  <Route path='/project' exact render={routerProps => <Projects {...routerProps}/> } />
  <Route path='/project' exact render={routerProps => <Projects {...routerProps}/> } />
  <Route path='/project' exact render={routerProps => <Projects {...routerProps}/> } />
    </main>
  </div>
  );
}

export default App;
