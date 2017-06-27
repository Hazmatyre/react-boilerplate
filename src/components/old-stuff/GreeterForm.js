import React from 'react';

var GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    let message = this.refs.message.value;
    var updates = {};
    if (name.length > 0) {
      updates.name = name;
      this.refs.name.value = '';
    }
    console.log(updates);
    if (message.length > 0) {
      updates.message = message;
      this.refs.message.value = '';
    }
    console.log(updates);
    this.props.onNewForm(updates)
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter name"/>
        </div>
        <div>
          <textarea type="text" ref="message" placeholder="Enter message"/>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
})

export default GreeterForm;
