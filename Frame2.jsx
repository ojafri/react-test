import React,{Componenet} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import styles from './resources/css/frame.css'


class Frame2 extends React.Component{
   
render(){
    return(        
<div className="frame-container">  
    <div className="frame-wall">
         <div className ="frame-header">
          <span id="frame-title">Frame1</span>       
         </div>
        <div id="frame1" className="frame1">
         <iframe src = "https://www.birst.com/" width = "400" height = "250" scrolling-x = 'Yes'
         scrolling-y = "Yes">
                 <h2> frame1 </h2>
         </iframe>
        </div>
        <div className="frame2">
             <iframe src =  "https://www.birst.com/" width = "400" height = "250" scrolling = 'No'>
                 <h2>frame2 </h2>
             </iframe>
        </div> 
        <div className="frame3">
            <iframe src = "https://www.youtube.com/watch?v=fJOwviF2oBQ" width = "400" height = "250" scrolling = 'yes'> 
            <h2> frame2 </h2>
            </iframe>
        </div>  
        <div className="frame4">
            <iframe src = "https://www.tutorialspoint.com/java/" width = "400" height = "250" scrolling = 'No'>
            <h2> frame2 </h2>
             </iframe>
        </div>     
    </div>
           
</div>               
        );
    }
}
export default Frame2;