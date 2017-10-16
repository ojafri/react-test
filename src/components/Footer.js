import React,{ Component } from 'react';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import { withTheme } from 'material-ui/styles'
import '../App.css';

class Footer extends Component
{        
    render(){
        const theme=withTheme(this.props.appTheme)
        console.log(theme.colorPrimary)
        return(
            <div>
                <div className="App-footer">
                    <span id="dateText">Date & time on the server is: {this.props.date.toTimeString()}</span>
                    <span>Copyright The © symbol, or the word 'Copyright' or abbreviation 'Copr.'</span>
                </div>
            </div>
        //     <BottomNavigation showLabels className="App-footer" theme>
        //     <BottomNavigationButton label={`Copyright The © symbol, or the word 'Copyright' or abbreviation 'Copr.'`}/>
        //     <BottomNavigationButton label="Recents" icon={<RestoreIcon />} />
        //     <BottomNavigationButton label="Favorites" icon={<FavoriteIcon />} />
        //     <BottomNavigationButton label={`Date & time on the server is: ${this.props.date.toTimeString()}`}/>
        //   </BottomNavigation>
        );
    }
}
export default withTheme()(Footer);