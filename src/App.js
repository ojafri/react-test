import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Panel from 'react-bootstrap/lib/Panel';
import Well from 'react-bootstrap/lib/Well';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import Header from './components/Header';
import Footer from './components/Footer';

const appBarStyle = {
    margin: '3% 0 0 19%',
}

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
              <div style={appBarStyle}>
                  <Well bsSize="small">Trend by medical cost category
                      <Breadcrumb>
                          <Breadcrumb.Item href="/#/Home">
                              Plan Sponsor
                          </Breadcrumb.Item>
                          <Breadcrumb.Item href="#">
                              Plans
                          </Breadcrumb.Item>
                          <Breadcrumb.Item href="#"  active>
                              Aetna
                          </Breadcrumb.Item>
                      </Breadcrumb>                                        
                  </Well>
              </div>
                  <Col xs={12} md={10}>
                      {this.props.children}
                  </Col>
              <Footer date={this.state.date}/>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
