import React, { Component } from 'react';

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
            onChange={this.onCityChange}
            placeholder="Enter city name"
          />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
}

export default WeatherForm;
