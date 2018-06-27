import React from 'react';

const Button = ({ content, handleClick, style }) => {
  return (
    <button onClick={handleClick} style={style}>
      {content}
    </button>
  );
};

export default Button;
