import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class WeatherForm extends Component {

  onCitySubmit = (e) => {
    e.preventDefault();
    var city = this.props.city
    if (city.length > 0)
      this.props.onCitySubmit();
  }

  onCityChange = (e) => {
    e.preventDefault();
    let update = {city: this.refs.city.value};
    this.props.onCityChange(update);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onCitySubmit}>
          <input
            type="text"
            ref="city"
            style={styles.field}
            onChange={this.onCityChange}
            placeholder="Enter city name"
          />
          <br/>
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
    width: 300
  },
  field: {
    height: 30,
    boxSizing: 'border-box',
    paddingLeft: 10,
    width: 300
  }
};

export default WeatherForm;
