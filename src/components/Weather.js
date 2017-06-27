import React, { Component } from 'react';
import WeatherForm from './WeatherForm.js';
import WeatherOutput from './WeatherOutput.js';
import {getWeather} from '../api/openWeatherMap.js'

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      temperature: undefined,
      isLoading: false,
    };
  }

  // http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=58a2cd1a0a047829682e7668d5179c95

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.city !== nextState.city)
  //     return false;
  //   return true;
  // }

  handleCityChange = (update) => {
    this.setState(update);
  }

  handleCitySubmit = async () => {
    this.setState({
      isLoading: true,
    });
    try {
      let response = await fetch(getWeather(this.state.city));
      let responseJson = await response.json()
      let status = response.status
      if (status === 200)
        this.setState({
          temperature: responseJson.main.temp,
          cityOutput: responseJson.name,
          isLoading: false,
        })
      else if (status === 404)
        throw "City not found!"
    } catch (err) {
      alert('ERROR: ' + err);
    }
    this.setState({
      isLoading: false,
    });
  }

  render() {
    var {city,
      temperature,
      cityOutput,
      isLoading } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Loading...</h3>;
      } else if (cityOutput && temperature) {
        return(
          <WeatherOutput
            temperature={temperature}
            cityOutput={cityOutput}/>
        );
      }
    }

    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm
          onCityChange={this.handleCityChange}
          onCitySubmit={this.handleCitySubmit}
          city={city}
        />
        {renderMessage()}
      </div>
    );
  }
}

export default Weather;
