import React, { Component } from 'react';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {MuiThemeProvider,createMuiTheme} from 'material-ui/styles';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import cyan from 'material-ui/colors/cyan';
import red from 'material-ui/colors/red';
import orange from 'material-ui/colors/orange';
import * as colors from 'material-ui/colors';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Panel from 'react-bootstrap/lib/Panel';
import Well from 'react-bootstrap/lib/Well';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import {BrowserRouter, Router, Route, IndexRoute, StaticRouter, HashRouter,Link} from 'react-router-dom';
import Home from './components/Home';
const myTheme = createMuiTheme({
    palette: {
      primary: purple, // Purple and green play nicely together.
      secondary: {
        ...green,
        A400: '#00e677',
      },
      error: red,
      type: 'light',      
    },
  });
  const orangeTheme = createMuiTheme({
        palette: {
          primary: orange, // Purple and green play nicely together.
          secondary: {
            ...colors.grey,
            A400: '#00e677',
          },
          error: red,
          type: 'light',      
        },
      }
  )

const appBarStyle = {
    margin: '3% 0 0 25%',
}

class App extends Component {
constructor(props){
    super(props); //Mandatory      
    this.state={
      date: new Date(),
      theme: orangeTheme
    };
  }
  render() {  
    return (
      <MuiThemeProvider theme={this.state.theme}>
          <div className="App">
              <Layout theme={this.state.theme}>
                <Route exact path='/' component={Home}/>
              </Layout>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
