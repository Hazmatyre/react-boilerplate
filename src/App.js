import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav.js';
import Weather from './components/Weather.js';
import About from './components/About.js';
import Examples from './components/Examples.js'

import {Route} from 'react-router-dom';

const App = ({}) => (
  <div>
    <Nav/>
    <Route exact path='/' component={Weather} />
    <Route path="/about" component={About} />
    <Route path='/examples' component={Examples} />
  </div>
);
// 
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Nav/>
//         <Route exact path='/' component={Weather} />
//         <Route path="/about" component={About} />
//         <Route path='/examples' component={Examples} />
//       </div>
//
//       /*<div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//       */
//     );
//   }
// }

export default App;
