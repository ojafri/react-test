var NavBarItem = React.createClass({
    generateLink: function(){
        return <NavBarLink url={this.props.url} text = {this.props.text} />
    },
    generateContent : function(){
        var content = [this.generateLink()];
        return content;
    },
    render: function(){
        var content = this.generateContent();
        return(
            <li>
                {content}
            </li>
        );
    }
})