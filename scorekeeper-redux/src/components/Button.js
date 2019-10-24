import React from 'react';
//why don't we need to import '../index.scss'

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

