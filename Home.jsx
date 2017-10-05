import React,{Componenet} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import styles from './resources/css/home.css';
<script src="resources/js/login.js"></script>;


class Home extends React.Component{
    hideLogin(){
        document.getElementById("login").style.display="none";
        document.getElementById("signup").style.display="block"; 
        document.getElementById("home").style.display="block"; 
              
    }
     showLogin(){
         document.getElementById("login").style.display="block";
         document.getElementById("login").style.display="hide";
     }
     hideLogout(){
         document.getElementById("logout").style.display="none";
         document.getElementById("login").style.display="block";
         document.getElementById("signup").style.display="block";
         document.getElementById("welcome-text").style.display="block";
         document.getElementById("loggedin-space").style.display="none";
         document.getElementById("frame-title-role").style.display="none";
         document.getElementById("home").style.display="none";
     }
    render( ){
        return(
           
           <div className = "home-container">
                 <div id="homeheader" className = "home-header">
                    <div className = "home-hangburger"> 
                     <span className = "hangburger-icon">
                    <img src={require('./resources/images/hangburger.png')}/></span>
                         <div className="dropdown-content">
                            <span id = "home" className="dropdown-link"><Link to ="/" onClick ={this.hideLogout}>Home</Link></span>
                            <span id = "login" className="dropdown-link"><Link to ="/login" onClick ={this.hideLogin}>Login</Link></span>
                            <span id ="signup" className="dropdown-link"><Link to ="/signup" >Sign Up</Link></span>
                            <span id ="logout" className="dropdown-link"><Link to ="/"  onClick ={this.hideLogout}>Logout</Link></span>
                        </div>
                    </div>
                    <div className = "logo-space">
                    <span className = "company-logo"><img src={require('./resources/images/Aetnalogo.jpg')}/></span>                   
                    <span id="welcome-text" className="header-text">Welcome ART Home</span>
                        <div id ="loggedin-space">                
                            <span className="loggedin-image"><img src={require('./resources/images/loggedinuser.png')}/></span>
                            <span id="loggedinheader-text" className="loggedinheader-text"></span>
                        </div>
                    </div>
                    <div className = "header-search">
                    <span className="headersearch-text"> 
                        <input type = "text" placeholder="search" className = "search-text"/></span>  
                    </div>
                </div>
          
           <div>
               <span id="frame-title-role"></span>
            </div>
        </div>
        );
     
          
           
      
    }
} 
export default Home;