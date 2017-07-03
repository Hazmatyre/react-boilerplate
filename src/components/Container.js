import React from 'react';
import PropTypes from 'prop-types';

var style = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  inner: {
    width: 480
  }
}

const Container = ({children}) => (
  <div style={style.container}>
    <div style={style.inner}>
      {children}
    </div>
  </div>
);



export default Container;
