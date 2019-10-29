import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button 
        onClick={props.action}
        disabled={props.disabled}
        className={props.className}
      >
      {props.buttonTitle}
      </button>
    </div>
  );
}

export default Button;

