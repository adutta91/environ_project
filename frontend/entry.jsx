// REACT
var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

// ROUTER
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;

var App = require('./components/app');


var appRoutes = (
  <Route path='/' component={App}></Route>
);

document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector("#root");
  ReactDOM.render(<Router history={hashHistory}>{appRoutes}</Router>, root);
});
