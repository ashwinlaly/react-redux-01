import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Alert from 'react-bootstrap/Alert';
import { Route, Link, Switch, Prompt } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import TextInput from "./Controls/TextInput";
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function About(props) {
  console.log(useState(1)[1]);
  return (
    <Alert variant='warning'>
      <Prompt when={true} message='Hi' />
      <Test id={props.match.params.id}/>
    </Alert>
  )
}

function Test(props){
  return(
    <div>{props.id}</div>
  )
}

function Help(){
  return (
    <Alert variant='info'>Help</Alert>
  )
}

function Contact(){
  return (
    <Alert variant='primary'>Contact</Alert>
  )
}

function Home() {
  return (
    <Alert variant='secondary'> Home</Alert>
  )
}

function Userform(props) {
  const [user, setUser] = useState({
    email : '',
    password : ''
  });
  function handleChange({target}){
    setUser({...user, [target.name] : target.value});
  }
  function handleSubmit(e){
    e.preventDefault();
    // props.history.push('/');
    toast.success();
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextInput 
          label='Email' 
          type='email' 
          id='email'
          placeholder='Enter the email' 
          onChange={handleChange} 
          name='email' 
          value={user.email}/>
        <TextInput 
          label='Password' 
          type='password' 
          id='password'
          placeholder='Enter the password' 
          name='password' 
          onChange={handleChange} 
          value={user.password} />
        <Button variant='primary' type='submit'>Submit</Button>
      </form>
    </>
  );
}

function NotaPage() {
  return (
    <Jumbotron>
      Page Not Found
    </Jumbotron>
  )
}

function App() {
  return (
    <>
      <Navbar bg='light' expand="lg">
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
        <Nav.Link as={Link} to='/about/:id'> About</Nav.Link>
        <Nav.Link as={Link} to='/help'> Help </Nav.Link>
        <Nav.Link as={Link} to='/contact'> Contact </Nav.Link>
        <Nav.Link as={Link} to='/userform'>User Form</Nav.Link> 
      </Navbar>
      <Jumbotron>
      <ToastContainer/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about/:id' component={About}/>
          <Route path='/help' component={Help}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/userform' component={Userform} />
          <Route component={NotaPage}/>
        </Switch>
      </Jumbotron>
    </>
  );
}

export default App;