import React, { Component } from 'react';
import {Link} from 'react-router-dom'

// class Examples extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Examples</h1>
//       </div>
//     );
//   }
// }

var style = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
  }
}

const Examples = ({}) => (
  <div style={style.container}>
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

  </div>
);

export default Examples;
