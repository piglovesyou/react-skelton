var React = require('react');
var Router = require('react-router');
var {
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler
} = Router;
var Index = require('./applications');
var Setting = require('./applications/setting');



var App = React.createClass({
  getInitialState: function () {
    return {
    };
  },
  render: function () {
    return (
      <RouteHandler store={this.props.store}/>
    );
  }
});

var NotFound = React.createClass({
  render: function () {
    return <h2>Not found</h2>;
  }
});

module.exports = (
  <Route handler={App}>
    <DefaultRoute handler={Index} />
    <Route handler={Index} name="index" path="home/pig/git/carbuncle-atom/index.html" />
    <Route handler={Setting} name="setting" path="setting" />
    <NotFoundRoute handler={NotFound} />
  </Route>
);
