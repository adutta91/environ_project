var React = require('react');

var EnvironIndex = require('./environs/environIndex');

var App = React.createClass({
  
  render: function() {
    return (
      <div id="app">
        <EnvironIndex />
      </div>
    )
  }
});

module.exports = App;
