import React, { Component } from 'react';
import ResponsiveEmbed from 'react-bootstrap/lib/ResponsiveEmbed';
import Panel from 'react-bootstrap/lib/Panel';

const appBarStyle = {
    margin: '0 0 0 3%',
}

class Home extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <ResponsiveEmbed a16by9 style={appBarStyle}>
                <embed src="https://www.birst.com/"/>
            </ResponsiveEmbed>
        );
    }
}

export default Home;