import React,{Componenet} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import styles from './resources/css/forgotpassword.css'

class Forgotpassword extends React.Component{
    render(){
        return(
        <div className="forgotpasswordcontainer">
            <div className="forgotpassword-wall">
                        <div className="forgotpassword-header">
                        <span className="image-logo2"><img src={require('./resources/images/usericon.png')}/></span>
                        <span><h3> Don't Have an Account? </h3></span>
                    </div>
                <div className="forgotpassword-body">
                        <div className="forgotpassword-paragraph">
                            <span>
                             If you don't have an account please register by clicking the "Sign Up" menu on the Left!!</span>
                        </div>
                       
                    <div className="Noaccount-bottom">
                       <span className='Noaccount-submit'><Link to ="/login"><button className="btn-submit">Back to Login</button></Link></span>
                    </div>
                </div>
            </div>
        </div>
            
                               
        );
    }
} 
export default Forgotpassword;