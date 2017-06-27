import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

const Nav = ({}) => (
  <div>
    <h2>Nav Component</h2>
    <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink>
    <NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
    <NavLink to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
  </div>
);

export default Nav;
