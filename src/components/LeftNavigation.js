import React,{ Component } from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import ListSubheader from 'material-ui/List/ListSubheader';
import * as colors from 'material-ui/colors';
import ActionAssignment from 'material-ui-icons/Assignment';
import EditorInsertChart from 'material-ui-icons/InsertChart';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import StarIcon from 'material-ui-icons/Star';
import ActionInfo from 'material-ui-icons/Info';
import logo from '../logo.svg';
import userlogo from '../images/Avatar.png'
import Aetna from '../images/Aetna.svg';
import Paper from 'material-ui/Paper';

const subheaderColor={
    backgroundColor: '#5E35B1',
    color: 'white'
}

class LeftNavigation extends Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Paper>
                    <img src={Aetna} className="App-logo" alt="logo" /><br/>
                    <img src={userlogo} alt="user-logo"/>
                </Paper>   
                <Divider />
                    <List>
                        <ListSubheader style={subheaderColor}>Robert Scott</ListSubheader>
                        <ListItem button>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                            <ListItemText primary="Trend Analysis" secondary="Trend Analysis" />
                        </ListItem>
                        <ListItem button>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                            <ListItemText primary="Prescription Drugs" secondary="Prescription Drugs" />
                        </ListItem>
                        <ListItem button>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                            <ListItemText primary="High Cost Claimants" secondary="High Cost Claimants" />
                        </ListItem>
                    </List>
                <Divider />
                <List>
                    <ListItem button>
                        <Avatar backgroundColor={colors.blue[500]}>
                            <ActionAssignment />
                        </Avatar>
                        <ListItemText primary="Program Management" secondary="Program Management"/>
                    </ListItem>
                    <ListItem button>
                        <Avatar backgroundColor={colors.yellow[600]}>
                            <EditorInsertChart/>
                        </Avatar>
                        <ListItemText primary="Recent Reports" secondary="Recent Reports"/>
                    </ListItem>
                </List>
          </div>
        )
    }
}
export default LeftNavigation;