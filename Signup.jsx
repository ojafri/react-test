import React,{Componenet} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import styles from './resources/css/signup.css'

class Signup extends React.Component{
    showSucessregister(){
        document.getElementById("signupwall").style.display ="none";
        document.getElementById("sucessregistration").style.display ="block";
    }
    closeSucess(){
        document.getElementById("sucessregistration").style.display ="none";
        document.getElementById("login").style.display ="block";
        document.getElementById("home").style.display ="none";
    }
    cancelSignup(){
        document.getElementById("login").style.display ="block";
    }
    
    render(){
        return(
        <div className="signupcontainer">
            <div id="signupwall" className="signup-wall">
                        <div className="signup-header">
                        <span className="image-logo3"><img src={require('./resources/images/usericon.png')}/></span>
                        <span><h3> Sign Up!! </h3></span>
                    </div>
                <div className="signup-body">
                        <div className="signup-text">
                        <span> <input type = "text" placeholder="FirstName"/></span>
                        </div> 
                        <div className="signup-text">
                        <span> <input type = "text" placeholder="LastName"/></span>
                        </div>
                        <div className="signup-text">
                        <span> <input type = "text" placeholder="Username-Email"/></span>
                        </div>     
                        <div className="signup-select">
                        <span> 
                            <select className = "select-dropdown">
                                <option value="select-Department">Select-Department</option>
                                <option value="Accounting">Accounting</option>
                                <option value="Sales">Sales</option>
                                <option value="Marketing">Marketing</option>
                                
                            </select>
                        </span>
                        </div>                   
                        <div className="signup-text">
                        <span> <input type = "password" placeholder="Password"/></span>
                        </div>
                        <div className="signup-text">
                        <span> <input type = "password" placeholder="Confirmpassword"/></span>
                        </div>
                        <div className="signup-text">
                        <span> <input type = "text" placeholder="MobileNumber"/></span>
                        </div>
                        
                       
                    <div className="signup-bottom">
                        <span className='signup-submit'><button className="btn-submit" onClick={this.showSucessregister}>Register</button></span>
                        <span className='signup-cancel'><Link to ="/"><button className="btn-submit" onClick={this.cancelSignup}>Cancel</button></Link></span>
                    </div>
                </div>
            </div>
            <div id="sucessregistration" className="sucess-registration">
            <span className='signup-sucess-register-text'>
                <h4> You have been sucessfully registered!! Please Login!</h4>
            </span>
            <span className='signup-sucess-register'>
                    <button className="btn-submit-sucessregister" onClick = {this.closeSucess}>Ok</button>
            </span>
            </div>
        </div>
                               
        );
    }
} 
export default Signup;