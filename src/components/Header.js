import React,{ Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
//import MobileTearSheet from 'material-ui/M';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
//import ActionAssignment from 'material-ui/svg-icons/action/assignment';'
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from "material-ui-icons/Menu";
import * as colors from 'material-ui/colors';
import {GridList, GridTile} from 'material-ui/GridList';
import NotificationIcon from 'material-ui-icons/Notifications';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Panel from 'react-bootstrap/lib/Panel';
import Well from 'react-bootstrap/lib/Well';
import Icon from 'material-ui/Icon';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import logo from '../logo.svg';
import userlogo from '../images/Avatar.png'
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
const appBarStyle = {
    margin: '0 0 0 0',
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    flex: {
        flex: 1,
      },
}
const notifCont={
    float: 'right'
}
const appTitle = 'ART - Birst Reporting';

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
        return(//iconElementRight=//onLeftIconButtonTouchTap={this.handleToggle.bind(this)} 
        <div className="App-header">
            <AppBar style={appBarStyle}>
                <Toolbar>
                    <IconButton color="contrast" aria-label="Menu" onClick={this.props.toggle}>
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" color="inherit" className={appBarStyle.flex} noWrap>
                        {appTitle}
                    </Typography>
                    <Badge color="accent" badgeContent={42}>
                        <NotificationIcon/>
                    </Badge>
                </Toolbar>
            </AppBar>
            {/* <Drawer docked={false} width={350} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
                <Paper>
                    <Menu>
                        <MenuItem onClick={this.handleClose.bind(this)}>Trend Analysis</MenuItem>
                        <MenuItem onClick={this.handleClose.bind(this)}>Prescription Drugs</MenuItem>
                        <MenuItem onClick={this.handleClose.bind(this)}>High Cost Claimants</MenuItem>
                        <MenuItem onClick={this.handleClose.bind(this)}>Gaps in Care Analysis Care Management</MenuItem>
                        <MenuItem onClick={this.handleClose.bind(this)}>Program Management</MenuItem>
                        <MenuItem onClick={this.handleClose.bind(this)}>Recent Reports</MenuItem>                            
                    </Menu>
                </Paper>
            </Drawer> */}
        </div>
        );
    }
}
export default Header;