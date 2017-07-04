import React from 'react';
import PropTypes from 'prop-types';

var style = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: 50,
  },
  inner: {
    minWidth: 300,
    maxWidth: 480,
    paddingLeft: 10,
    paddingRight: 10,
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
