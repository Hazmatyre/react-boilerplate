import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const Examples = ({}) => (
  <div>
    <h1>Examples</h1>
    <p>Here are a few example locations to try out:</p>
    <ol>
      <li>
        <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
      </li>
      <li>
        <Link to='/?location=Rio'>Rio, Brazil</Link>
      </li>
    </ol>
  </div>
);

export default Examples;
