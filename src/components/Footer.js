import React,{ Component } from 'react';
import Aetna from '../images/Aetna.svg';
import '../App.css';

class Footer extends Component
{        
    render(){
        return(
            <div>
                <img src={Aetna} className="App-logo" alt="logo" /> 
                <div className="App-footer">
                    <span id="dateText">Date & time on the server is: {this.props.date.toTimeString()}</span>
                    <span>Copyright The © symbol, or the word 'Copyright' or abbreviation 'Copr.'</span>
                </div>
            </div>
        );
    }
}
export default Footer;