import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class WeatherForm extends Component {

  onCitySubmit = (e) => {
    e.preventDefault();
    var city = this.city.input.value;
    console.log(city);
    if (city.length > 0)
      this.props.onCitySubmit();
  }

  onCityChange = (e) => {
    e.preventDefault();
    let update = {city: this.city.input.value};
    this.props.onCityChange(update);
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.onCitySubmit}
          style={styles.container}>
          <TextField
            type="search"
            ref={(city) => {this.city = city}}
            style={styles.field}
            onChange={this.onCityChange}
            floatingLabelText="Enter city name"
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
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  button: {
    flex: 1,
  },
  field: {
    flex: 1,
  }
};

export default WeatherForm;
