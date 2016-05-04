var React  = require('react');
var routerModule = require('react-router');
var history = require("react-router/lib/HashHistory").history;

var Router = routerModule.Router;
var Route = routerModule.Route;
var Redirect = routerModule.Redirect;

var Getstarted = require('./components/getstarted.js');
var Stream = require('./components/stream.js');

module.exports = (
  <Router history={history}>
    <Route>
      <Redirect from='/' to='/getstarted' />
      <Route path='getstarted' component={Getstarted} />
      <Route path='stream' component={Stream}></Route>
    </Route>
  </Router>
);
