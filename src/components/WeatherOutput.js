import React, { Component } from 'react';

const WeatherOutput = ({temperature, cityOutput}) => (
  temperature !== undefined || cityOutput !== undefined
  ? <p>It is currently {temperature} degrees in {cityOutput}.</p>
  : null
);

//
// class WeatherOutput extends Component {
//
//   render() {
//     var temperature = this.props.temperature;
//     var cityOutput = this.props.cityOutput;
//     if (temperature !== undefined) {
//       return (
//         <div>
//           <p>It is currently {temperature} degrees in {cityOutput}.</p>
//         </div>
//       );
//     }
//     return (
//       null
//     );
//   }
// }

export default WeatherOutput;
