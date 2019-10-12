import React, { useState } from 'react';
import './Button.css';

type ButtonProps = {
  message: string
}; /* could also use interface */

const Button = ({ message }: ButtonProps) => {
  const [buttonState, setButtonState] = useState(false);

  return (
    <div >
      <button
        onClick={() => setButtonState(!buttonState)}
        className={ buttonState ? 'active': ''}
      >
        {message}
      </button>
    </div>
  );
}

export default Button;