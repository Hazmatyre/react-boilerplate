import React, { Component } from 'react';
import WeatherForm from './WeatherForm.js';
import WeatherOutput from './WeatherOutput.js';
import {getWeather} from '../api/openWeatherMap.js'

import RefreshIndicator from 'material-ui/RefreshIndicator';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import CityErr from './CityErr.js';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      temperature: undefined,
      isLoading: false,
      err: false
    };
  }

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
        this.setState({err: true})
    } catch (err) {
      console.log(err);
      alert('ERROR: ' + err);
    }
    this.setState({
      isLoading: false,
    });
  }

  handleErrClose = () => {
    this.setState({err: false});
  }

  render() {
    var {city,
      temperature,
      cityOutput,
      isLoading } = this.state;

    const Loading = () => (
      <div>
        <RefreshIndicator
          size={40}
          left={10}
          top={20}
          status='loading'
          style={{display: 'inline-block', position: 'relative'}}/>
      </div>
    )

    const renderMessage = () => {
      if (isLoading) {
        return <Loading/>;
      } else if (this.state.err) {
        return(
          <CityErr
            err={this.state.err}
            onErrClose={this.handleErrClose}/>
        );
      } else if (cityOutput && temperature) {
        return(
          <WeatherOutput
            temperature={temperature}
            cityOutput={cityOutput}/>
        );
      }
    }

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',}}>
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
