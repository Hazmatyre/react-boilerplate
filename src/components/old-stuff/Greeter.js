import React, { Component } from 'react';
import GreeterMessage from './GreeterMessage.js';
import GreeterForm from './GreeterForm.js';

var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'What a load of bologne!'
    }
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  handleNewForm: function (updates) {
    this.setState(updates);
  },
  render: function() {
    var message = this.state.message;
    var name = this.state.name;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewForm={this.handleNewForm}/>
      </div>
    );
  }
})

export default Greeter;
