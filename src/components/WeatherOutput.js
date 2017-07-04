import React, { Component } from 'react';

const WeatherOutput = ({temperature, cityOutput}) => (
  temperature !== undefined || cityOutput !== undefined
  ? <p>It is currently {temperature} degrees Celcius in {cityOutput}.</p>
  : null
);

export default WeatherOutput;
