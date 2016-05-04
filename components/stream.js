var React  = require('react');
var routerModule = require('react-router');
var Link = routerModule.Link;

var Stream = React.createClass({
  render: function() {
    return (
      <div>
      	<h1>Test</h1>
      	<Link to="/getstarted">Home</Link>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Stream;
