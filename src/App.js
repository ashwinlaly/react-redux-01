import React from 'react';
import { Router , Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const App = () => {
  return (
    <>
      <Switch>
        <Router path='/' exact component={Home}/>
        <Router path='/home' component={Home}/>
        <Router path='/about' component={About}/>
      </Switch>
      <div className='jumbotron'>
        <Link to='/home'>Home</Link>
      </div>
    </>
  );
}

export default App;
