import React,{ Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
//import MobileTearSheet from 'material-ui/M';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ListSubheader from 'material-ui/List/ListSubheader';
import Avatar from 'material-ui/Avatar';
import * as colors from 'material-ui/colors';
import {GridList, GridTile} from 'material-ui/GridList';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Panel from 'react-bootstrap/lib/Panel';
import Well from 'react-bootstrap/lib/Well';
import Breadcrumb from 'react-bootstrap/lib/Breadcrumb';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import Hidden from 'material-ui/Hidden';
import logo from '../logo.svg';
import userlogo from '../images/Avatar.png'
import Aetna from '../images/Aetna.svg';
import Header from './Header';
import Footer from './Footer';
import LeftNavigation from './LeftNavigation';
import '../App.css';

const listStyle = {
  //display: 'inline-block',
  margin: '0 0 0 0',
  float: 'left',
  left: '0px',
};

const appBarStyle = {
    margin: '0 0 0 0',
}
const appTitle = 'ART - Birst Reporting';

const style = {
  display: 'inline-block',
  margin: '16px 16px 16px 0',
  float: 'left'
};

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: 430,
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%',
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

class Layout extends Component
{
    constructor(props){
        super(props); 
        this.state = {
            open: false,
            date: new Date()
        };
    }
    handleToggle(e) {
        e.preventDefault();
        this.setState({open: !this.state.open});
    }

    handleClose(e){
        e.preventDefault();
        this.setState({open: true});
    }
        
    render()
    {
        setTimeout(()=>{
            this.setState({date:new Date()});
      },1000);
      const { classes, theme } = this.props;      
        return(
            <Grid fluid={true}>
                <Row className="show-grid">                        
                    {/* <Hidden mdUp> */}
                        <Drawer type="temporary" theme={theme} open={this.state.open}
                        onRequestClose={this.handleToggle.bind(this)} ModalProps={{keepMounted: true,}}>
                            <LeftNavigation/>
                        </Drawer>
                    {/* </Hidden> */}
                    {/* <Hidden mdDown implementation="css">
                        <Drawer type="permanent" open>
                            <LeftNavigation/>
                        </Drawer>
                    </Hidden> */}
                        {/* <div>
                           
                        </div> */}
                    <Col xs={12} md={12}>
                        <Header toggle={this.handleToggle.bind(this)}></Header>
                        {this.props.children}
                    </Col>
                </Row>
                <Row>
                    <Footer date={this.state.date} appTheme={this.props.theme}/>
                </Row>
        </Grid>
        );
    }
}
export default Layout;