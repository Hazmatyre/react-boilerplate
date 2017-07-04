import React, { Component } from 'react';
import { withRouter } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import URLSearchParams from 'url-search-params'


class WeatherForm extends Component {

  constructor(props) {
    super(props);

    // this.defaultCity = this.props.city;
  }

  updateDefaultWeather() {
    let params = new URLSearchParams(this.props.location.search);
    let city = params.get('city');
    if (city && city.length > 0) {
      return this.defaultCity = city;
    }
    this.defaultCity = '';
  }

  onCitySubmit = (e) => {
    e.preventDefault();
    this.props.onCitySubmit();
  }

  onCityChange = (e) => {
    e.preventDefault();
    this.props.onCityChange(this.city.input.value);
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.onCitySubmit}
          style={styles.container}>
          <TextField
            type="search"
            defaultValue={this.props.initialCity === null ? '' : this.props.initialCity}
            key={this.props.cityChanged}
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

export default withRouter(WeatherForm);
