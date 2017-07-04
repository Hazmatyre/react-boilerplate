import React, { Component } from 'react';
import WeatherForm from './WeatherForm.js';
import WeatherOutput from './WeatherOutput.js';
import {getWeather} from '../api/openWeatherMap.js'
import { withRouter } from 'react-router';

import RefreshIndicator from 'material-ui/RefreshIndicator';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import CityErr from './CityErr.js';
import URLSearchParams from 'url-search-params'

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      cityChanged: undefined,
      temperature: undefined,
      isLoading: false,
      err: false
    };

    this.urlListener = this.props.history.listen((location, action) => {
      if (location.pathname === '/') {
        let params = new URLSearchParams(location.search);
        let city = params.get('city');
        this.handleQueryStringChange(city);
      }
    });
  }

  componentWillUnmount() {
    this.urlListener();
  }

  componentWillMount = () => {
    this.handleQueryStringChange();
    // this.props.history.replace('/');
  }

  handleQueryStringChange = async (location) => {
    if (location !== undefined) {
      await this.handleCityChange(location);
      this.handleCitySubmit();
    }
    var params = new URLSearchParams(this.props.location.search);
    var city = params.get('city');
    if (city && city.length > 0) {
      await this.handleCityChange(city);
      this.handleCitySubmit();
    }
  }

  handleCityChange = (city) => {
    this.setState({city: city});
  }

  handleCitySubmit = async () => {
    if (!this.state.isLoading) {
      this.setState({
        isLoading: true,
        err: false,
        cityChanged: this.state.city,
      });
      try {
        if (this.state.city.length > 60){
          let someString = "The longest city in the world is 58 letters. Did you really think I didn't know? It's Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.";
          throw someString; 
        }
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
  }

  handleErrClose = () => {
    this.setState({err: false});
  }

  render() {
    var {city,
      temperature,
      cityOutput,
      isLoading,
      cityChanged } = this.state;

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
          initialCity={city}
          cityChanged={cityChanged}
        />
        {renderMessage()}
      </div>
    );

  }

}

export default withRouter(Weather);
