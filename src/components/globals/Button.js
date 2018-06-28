import React from 'react';

const Button = ({ content, handleClick, className }) => (
  <button onClick={handleClick} className={className}>
    {content}
  </button>
);

export default Button;
