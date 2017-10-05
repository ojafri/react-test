var NavBarLink = React.createClass({
    render: function(){
        var content = this.generateContent();
        return(
           <a href = {this.props.url}> {this.props.text}</a>
        );
    }
})


