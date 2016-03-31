var React = require('react');

var EnvironStore = require('../../stores/environStore');
var EnvironIndexItem = require('./environIndexItem');

var EnvironIndex = React.createClass({
  getInitialState: function() {
    return ({
      environs: []
    });
  },

  componentDidMount: function() {
    this.listener = EnvironStore.addListener(this.environsChanged);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  environsChanged: function() {
    this.setState({ environs: EnvironStore.all() })
  },

  environs: function() {
    return this.state.environs.map(function(environ, index) {
      return (<EnvironIndexItem id={index} />)
    });
  },

  render: function() {
    return (
      <div>
        { this.environs }
      </div>
    )
  }
});

module.exports = EnvironIndex;
