import React,{Componenet} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import styles from './resources/css/forgotpassword.css'

class Forgotpassword extends React.Component{
    showPasswordsentdiv(){
        document.getElementById("forgotpasswordwall").style.display ="none";
        document.getElementById("forgorpasswordsent").style.display ="block";
    }
    closeForgotpasswordsent(){
        document.getElementById("forgorpasswordsent").style.display ="none";
        document.getElementById("login").style.display ="block";
        document.getElementById("home").style.display ="none";
    }
    render(){
        return(
        <div className="forgotpasswordcontainer">
            <div id = "forgotpasswordwall" className="forgotpassword-wall">
                        <div className="forgotpassword-header">
                        <span className="image-logo2"><img src={require('./resources/images/usericon.png')}/></span>
                        <span><h3> Forgot Your Password? </h3></span>
                    </div>
                <div className="forgotpassword-body">
                        <div className="forgotpassword-paragraph">
                            <span>
                             In order to receive your password by e-mail, Please enter the address you provided
                             during the registration process</span>
                        </div>
                        <div className="forgotpassword-text">
                        <span> <input type = "text" placeholder="Email"/></span>
                        </div>
                    <div className="forgotpassword-bottom">
                        <span className="forgotpassword-hyperlink"><Link to ="/login" >-Back to Login</Link></span>
                        <span className='forgotpassword-submit'><button className="btn-submit" onClick = {this.showPasswordsentdiv}>Send ></button></span>
                    </div>
                </div>
            </div>
            <div id="forgorpasswordsent" className="forgotpassword-sent">
            <span className='forgotpassword-sent-text'>
                <h4> Your Password has been sent to your registered mail id sucessfully!!</h4>
            </span>
            <span className='forgotpassword-sucess-sent'>
                    <button className="btn-submit-forgorpasswordsent" onClick = {this.closeForgotpasswordsent}>Ok</button>
            </span>
            </div>
        </div>
            
                               
        );
    }
} 
export default Forgotpassword;