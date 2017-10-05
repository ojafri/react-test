import React,{Componenet} from 'react';
import ReactDOM from 'react-dom';
import {Link,withRouter,hashHistory} from 'react-router-dom';
import {Route,browserHistory,Redirect} from 'react-router';
import styles from './resources/css/login.css';'./resources/css/frame.css';


class Login extends React.Component{
    hideLogin(){
        document.getElementById("login").style.display="none";
        document.getElementById("home").style.display="none";
        document.getElementById("signup").style.display="none";
        document.getElementById("logout").style.display="block";
        document.getElementById("welcome-text").style.display="none";
        document.getElementById("loggedin-space").style.display="block";
        if(document.getElementById("username").value == "Andy@aetna.com"){
            document.getElementById("frame-title-role").style.display="block";
            document.getElementById("loggedinheader-text").innerHTML = "Welcome Andy";
            document.getElementById("frame-title-role").innerHTML = "Client > Accounting Manager Dashboard";
            document.getElementById("login-container").style.display = "none";
            document.getElementById("Andy-frame-container").style.display = "block";
            document.getElementById("Cathy-frame-container").style.display = "none";
            }else if(document.getElementById("username").value == "Cathy@aetna.com"){
            document.getElementById("frame-title-role").style.display="block";
            document.getElementById("loggedinheader-text").innerHTML = "Welcome Cathy";
            document.getElementById("frame-title-role").innerHTML = "Client > Sales Manager Dashboard";
            document.getElementById("login-container").style.display = "none";
            document.getElementById("Cathy-frame-container").style.display = "block";
            document.getElementById("Andy-frame-container").style.display = "none";
            document.getElementById("Robert-frame-container").style.display = "none";            
        }else if(document.getElementById("username").value == "Robert@aetna.com"){
            document.getElementById("frame-title-role").style.display="block";
            document.getElementById("loggedinheader-text").innerHTML = "Welcome Robert";
            document.getElementById("frame-title-role").innerHTML = "Client > Marketing Manager Dashboard";
            document.getElementById("login-container").style.display = "none";
            document.getElementById("Cathy-frame-container").style.display = "none";
            document.getElementById("Andy-frame-container").style.display = "none";
            document.getElementById("Robert-frame-container").style.display = "block";
        }else{
            alert("No user Account Found. Please Register!!");
            document.getElementById("signup").style.display="block";
        }
    }

    render(){            
        return(
        <div>        
                <div id = "login-container" className="logincontainer">
                    <div className="login-wall">
                        <div className="login-header">
                        <span className="image-logo"><img src={require('./resources/images/usericon.png')}/></span>
                        <span><h3> ART - Login </h3></span>
                        </div>
                        <div className="login-body">
                        <div>
                            <span className="login-text"> <input id="username" type = "text" placeholder="Email"/></span>
                            </div>
                            <div>
                            <span className="login-text"> <input type = "password" placeholder="Password"/></span>
                            </div>
                            <div className="login-text">
                            <label>
                                <input type="checkbox" value="remember-me"/>
                                 Remember me
                                </label>
                            </div>
                            <div className="login-bottom">
                            <span className="login-hyperlink"><Link to ="/forgotusername" >forgot:username</Link></span>
                            <span>|</span>
                            <span className="login-hyperlink"><Link to ="/forgotpassword" >forgot:password</Link></span>
                            <span>|</span>
                            <span className="login-hyperlink"><Link to ="/noaccount" >Dont have an account</Link></span>
                            <span className="login-submit"><button type="button" className="btn-submit" onClick ={this.hideLogin}>Continue ></button></span>
                            
                            </div>

                        </div>
                    </div>
                 </div>

<div id="Andy-frame-container" className="frame-container">  
    <div className="frame-wall">
         <div id="frame1" className="frame1">
         <iframe src = "https://www.birst.com/" width = "450" height = "250" scrolling-x = 'Yes'
         scrolling-y = "Yes">
                 <h2> frame1 </h2>
         </iframe>
        </div>
        <div className="frame2">
             <iframe src =  "/resources/images/Accnt_Dashboard2.png" width = "450" height = "250" scrolling = 'No'>
                 <h2>frame2 </h2>
             </iframe>
        </div> 
        <div className="frame3">
            <iframe src = "/resources/images/Accnt_Dashboard4.png" width = "450" height = "250" scrolling = 'yes'> 
            <h2> frame2 </h2>
            </iframe>
        </div>  
        <div className="frame4">
            <iframe src = "http://labbirst.dsi.aetna.com/" width = "450" height = "250" scrolling = 'Yes'>
            <h2> frame2 </h2>
             </iframe>
        </div>     
    </div>
           
</div>               

<div id="Cathy-frame-container" className="frame-container">  
    <div className="frame-wall">
        <div id="frame1" className="frame1">
         <iframe src = "/resources/images/Sales_Dashboard1.jpg" width = "450" height = "260">
                 <h2> frame1 </h2>
         </iframe>
        </div>
        <div className="frame2">
             <iframe src =  "https://www.birst.com/" width = "450" height = "260">
                 <h2>frame2 </h2>
             </iframe>
        </div> 
        <div className="frame3">
            <iframe src = "/resources/images/Sales_Dashboard3.png" width = "450" height = "260" scrolling = 'No'> 
            <h2> frame2 </h2>
            </iframe>
        </div>  
        <div className="frame4">
            <iframe src = "/resources/images/Sales_Dashboard4.jpg" width = "450" height = "260" scrolling = 'No'>
            <h2> frame2 </h2>
             </iframe>
        </div>     
    </div>
</div>         

<div id="Robert-frame-container" className="frame-container">  
    <div className="frame-wall">
         <div id="frame1" className="frame1">
         <iframe src = "https://www.birst.com/" width = "450" height = "260" scrolling-x = 'Yes'
         scrolling-y = "Yes">
                 <h2> frame1 </h2>
         </iframe>
        </div>
        <div className="frame2">
             <iframe src =  "/resources/images/Marketing_Dashboard1.gif" width = "450" height = "260" scrolling = 'No'>
                 <h2>frame2 </h2>
             </iframe>
        </div> 
        <div className="frame3">
            <iframe src = "/resources/images/Marketing_Dashboard2.jpg" width = "450" height = "250" scrolling = 'yes'> 
            <h2> frame2 </h2>
            </iframe>
        </div>  
        <div className="frame4">
            <iframe src = "/resources/images/Marketing_Dashboard3.png" width = "450" height = "260">
            <h2> frame2 </h2>
             </iframe>
        </div>     
    </div>
</div> 
</div>                
        );
    }
} 
export default withRouter(Login);