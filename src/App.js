import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
constructor(props){
    super(props); //Mandatory      
    this.state={
      date: new Date()
    };
  }  
  render() {
      setTimeout(()=>{
            this.setState({date:new Date()});
      },1000);    
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div className="App">
              {/*<header className="App-header">
                <img src={Aetna} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>*/}
              <Header/>
              <p className="App-intro">
                {this.props.children}
              </p>
              <Footer date={this.state.date}/>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
