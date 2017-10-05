import React,{Componenet} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import styles from './resources/css/forgotpassword.css'

class Forgotusername extends React.Component{
    showUsernamesentdiv(){
        document.getElementById("forgotusernamewall").style.display ="none";
        document.getElementById("forgortusernamesent").style.display ="block";
    }
    closeUsernamesent(){
        document.getElementById("forgortusernamesent").style.display ="none";
        document.getElementById("login").style.display ="block";
        document.getElementById("home").style.display ="none";
    }
    render(){
        return(
        <div className="forgotpasswordcontainer">
            <div id="forgotusernamewall" className="forgotpassword-wall">
                        <div className="forgotpassword-header">
                        <span className="image-logo2"><img src={require('./resources/images/usericon.png')}/></span>
                        <span><h3> Forgot Your Username? </h3></span>
                    </div>
                <div className="forgotpassword-body">
                        <div className="forgotpassword-paragraph">
                            <span>
                             In order to receive your username by e-mail, Please enter the address you provided
                             during the registration process</span>
                        </div>
                        <div className="forgotpassword-text">
                        <span> <input type = "text" placeholder="Email"/></span>
                        </div>
                    <div className="forgotpassword-bottom">
                        <span className="forgotpassword-hyperlink"><Link to ="/login" >-Back to Login</Link></span>
                        <span className='forgotpassword-submit'><button className="btn-submit" onClick = {this.showUsernamesentdiv}>Send ></button></span>
                    </div>
                </div>
            </div>
            <div id="forgortusernamesent" className="forgortusername-sent">
            <span className='forgortusername-sent-text'>
                <h4> Your Username has been sent to your registered mail id sucessfully!!</h4>
            </span>
            <span className='forgortusername-sucess-sent'>
                    <button className="btn-submit-forgortusernamesent" onClick = {this.closeUsernamesent}>Ok</button>
            </span>
            </div>
        </div>
            
                               
        );
    }
} 
export default Forgotusername;