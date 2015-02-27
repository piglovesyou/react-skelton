
var React = require('react');
var {HistoryLocation} = require('react-router');

var Link = React.createClass({
  render() {
    return (
      <a href={this.props.href} onClick={pushState(this.props.href)}>
        {this.props.children}
      </a>
    );
  }
});
module.exports = Link;

function pushState(path) {
  return function(e) {
    e.preventDefault();
    HistoryLocation.push(path);
  };
}
