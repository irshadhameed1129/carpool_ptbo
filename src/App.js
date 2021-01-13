import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Career from './pages/career';
// import Career from './pages/services';
import Login from './pages/login';
import Register from './pages/register';
import UserHome from './pages/userHome';
// import axios from 'axios';

 class App extends Component {
  constructor() {
    super();

    this.state ={
      loggedInStatus : "NOT_LOGGED_IN",
      user: {}
    }

  }

  

  render() {
      return (
          <>
         <Router>
   <NavBar />
     <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/home' exact component={Home} />
       <Route path='/career' component={Career} />
       <Route path='/login' component={Login} />
       <Route path='/register' component={Register} />
       <Route path='/userHome' component ={UserHome}/>
       {/* <Link to="/userHome">Login</Link> */}
     
    </Switch>
    
 </Router>
        </>
      )
  }
}


export default App;
