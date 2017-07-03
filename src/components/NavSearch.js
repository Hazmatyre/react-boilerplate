import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

class NavSearch extends Component {

  onSearch = (e) => {
    e.preventDefault();
    alert("Wew");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSearch}>
          <input
            type="text"
            style={styles.field}
            placeholder="City"/>
          <RaisedButton
            type="submit"
            label="Get Weather"
            secondary={true}
            style={styles.button}/>
        </form>
      </div>
    );
  }

}

var styles = {
  button: {
    margin: 12,
    height: 30,
  },
  field: {
    height: 30,
    boxSizing: 'border-box',
    paddingLeft: 10,
  }
};

export default NavSearch;