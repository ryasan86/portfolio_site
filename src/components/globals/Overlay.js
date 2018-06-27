import React, { Component } from 'react';

const Overlay = ({ color }) => {
  const style = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '9999'
  };

  return <div className="overlay" style={style} />;
};

export default Overlay;
