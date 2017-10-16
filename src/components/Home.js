import React, { Component } from 'react';
import ResponsiveEmbed from 'react-bootstrap/lib/ResponsiveEmbed';
import Panel from 'react-bootstrap/lib/Panel';

const appBarStyle = {
    margin: '5% 0 0 0',
}

class Home extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <ResponsiveEmbed a4by3 style={appBarStyle}>
                <embed src="https://www.birst.com/"/>
            </ResponsiveEmbed>
        );
    }
}

export default Home;