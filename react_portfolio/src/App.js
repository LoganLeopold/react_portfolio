import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom'

function App() {
  return (
  <div>
    <div>This is a placeholder lollerskaat</div>
    <nav className='top'>
     <h1> <Link className='homepage' to='/'>Lyrically</Link></h1>
     <h2> <Link to={''}>Component</Link></h2> 
     </nav>  
    <main>
      <Route path='' exact render={routerProps => <Component {...routerProps}/>} {...this.state} />
    </main>
    </div>
  );
}

export default App;
