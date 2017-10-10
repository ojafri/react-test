import React,{ Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500, blue900} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
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
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import logo from '../logo.svg';
import Aetna from '../images/Aetna.svg';
import '../App.css';

const muiTheme = getMuiTheme({
  palette: {
    textColor: blue900,
  },
  appBar: {
    height: 50,
  },
});

const style = {
  display: 'inline-block',
  margin: '16px 16px 16px 0',
  float: 'left'
};

const navMenu = () =>{
    <div>
    </div>
}

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
            <div>
                    <Paper style={style}>
                        <List>
                            <Subheader inset={true}>Robert Scott</Subheader>
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
                            <Subheader inset={true}>Files</Subheader>
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
                                secondaryText="Jan 10, 2014"
                            />
                        </List>                    
                    </Paper>                
                <div className="App-header">
                    {/*<img src={vscode} className="App-logo-vscode" alt="logo vscode" />*/}
                    <Drawer
                    docked={false}
                    width={350}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>
                        <Paper style={style}>
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
                    <AppBar onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                    iconElementRight={<Badge badgeContent={4} primary={true}>
                        <IconButton iconClassName="material-icons" tooltip="Notification">notifications</IconButton>
                    </Badge>} title='Welcome to ART reporting app bootstrapped through create react app & supported by express '/>
                </div>
                {/*<div>
                    <h4>{this.props.name} {this.props.greeting}</h4>        
                </div>*/}                
            </div>
        );
    }
}
export default Header;