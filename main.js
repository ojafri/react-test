import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {BrowserRouter,Route,Link,Router,browserHistory} from 'react-router-dom';
import Login from './Login.jsx';
import Frame from './App.jsx';
import Forgotusername from './Forgotusername.jsx'
import Forgotpassword from './Forgotpassword.jsx';
import Noaccount from './Noaccount.jsx';
import Home from './home.jsx';
import Signup from './Signup.jsx';


ReactDOM.render((  
    <BrowserRouter>
        <div>
            
            <Route path="/" component={Home}>
            </Route>
            <Route path="/forgotusername" component={Forgotusername}>
            </Route>
            <Route path="/forgotpassword" component={Forgotpassword}>
            </Route>
            <Route path="/noaccount" component={Noaccount}>
            </Route>
            <Route path="/login" component={Login}>
            </Route>
            <Route path="/signup" component={Signup}>
            </Route>
           
            
        </div>
      </BrowserRouter>  
           
    ),
        
        document.getElementById('app'));