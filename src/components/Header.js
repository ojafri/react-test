import React,{ Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
//import Badge from 'material-ui/Badge';
import Badge from 'react-bootstrap/lib/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
//import MobileTearSheet from 'material-ui/M';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {cyan500, blue500, blue900, yellow600, deepPurple600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import {GridList, GridTile} from 'material-ui/GridList';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Panel from 'react-bootstrap/lib/Panel';
import Well from 'react-bootstrap/lib/Well';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import logo from '../logo.svg';
import userlogo from '../images/Avatar.png'
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import logo from '../logo.svg';
import Aetna from '../images/Aetna.svg';
import '../App.css';

const muiTheme = getMuiTheme({
  palette: {
    textColor: blue900,
  },
  appBar: {
    height: 20,
  },
});

const listStyle = {
  display: 'inline-block',
  margin: '10% 0 0 0',
  float: 'left',
  left: '0px',
};
const subheaderColor={
    backgroundColor: '#5E35B1',
    color: 'white'
}

const appBarStyle = {
    margin: '0 0 0 2%',
}
const appTitle = 'ART - Birst Reporting';

const style = {
  display: 'inline-block',
  margin: '16px 16px 16px 0',
  float: 'left'
};

class Header extends Component
{
    constructor(props){
        super(props); 
        this.state = {open: false};
    }
    handleToggle(e) {
        e.preventDefault();
        this.setState({open: !this.state.open});
    }

    handleClose(e){
        e.preventDefault();
        this.setState({open: true});
    }
        
    render(){
        return(
                <div className="App-header">
                    <Grid fluid={true}>
                        <Row className="show-grid">                        
                            <Col xs={6} md={2}>
                                <div>
                                    <img src={Aetna} className="App-logo" alt="logo" />
                                    <Paper style={listStyle}>
                                        <img src={userlogo} alt="user-logo"/>
                                        <List>
                                            <Subheader inset={true} className="subHeaderStyle" style={subheaderColor}>Robert Scott</Subheader>
                                            <ListItem
                                                leftAvatar={<Avatar icon={<FileFolder />} />}
                                                rightIcon={<ActionInfo />}
                                                primaryText="Trend Analysis"
                                                secondaryText="Trend Analysis"
                                            />
                                            <ListItem
                                                leftAvatar={<Avatar icon={<FileFolder />} />}
                                                rightIcon={<ActionInfo />}
                                                primaryText="Prescription Drugs"
                                                secondaryText="Prescription Drugs"
                                            />
                                            <ListItem
                                                leftAvatar={<Avatar icon={<FileFolder />} />}
                                                rightIcon={<ActionInfo />}
                                                primaryText="High Cost Claimants"
                                                secondaryText="High Cost Claimants"
                                            />
                                            </List>
                                            <Divider inset={true} />
                                            <List>
                                            {/*<Subheader inset={true}>Files</Subheader>*/}
                                            <ListItem
                                                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
                                                rightIcon={<ActionInfo />}
                                                primaryText="Program Management"
                                                secondaryText="Program Management"
                                            />
                                            <ListItem
                                                leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
                                                rightIcon={<ActionInfo />}
                                                primaryText="Recent Reports"
                                                secondaryText="Recent Reports"
                                            />
                                        </List>                    
                                    </Paper>   
                                </div>                              
                            </Col>
                            <Col xs={12} md={10}>
                                <Drawer docked={false} width={350} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                                    <Paper style={listStyle}>
                                        <Menu>
                                            <MenuItem onClick={this.handleClose.bind(this)}>Trend Analysis</MenuItem>
                                            <MenuItem onClick={this.handleClose.bind(this)}>Prescription Drugs</MenuItem>
                                            <MenuItem onClick={this.handleClose.bind(this)}>High Cost Claimants</MenuItem>
                                            <MenuItem onClick={this.handleClose.bind(this)}>Gaps in Care Analysis Care Management</MenuItem>
                                            <MenuItem onClick={this.handleClose.bind(this)}>Program Management</MenuItem>
                                            <MenuItem onClick={this.handleClose.bind(this)}>Recent Reports</MenuItem>                            
                                        </Menu>
                                    </Paper>
                                </Drawer>
                                <AppBar title={appTitle} onLeftIconButtonTouchTap={this.handleToggle.bind(this)} style={appBarStyle}
                                        iconElementRight={<IconButton tooltip="Notifications"><Badge>42</Badge><NotificationsIcon /></IconButton>}>
                                </AppBar>
                            </Col>
                        </Row>
                    </Grid>
                {/*<div>
                    <h4>{this.props.name} {this.props.greeting}</h4>        
                </div>*/}                
            </div>
        );
    }
}
export default Header;