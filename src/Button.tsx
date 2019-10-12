import React, { useState } from 'react';
import './Button.css';

type ButtonProps = {
  message: string,
  onToggle(): void
}; /* could also use interface */

const Button = ({ message, onToggle }: ButtonProps) => {
  const [buttonState, setButtonState] = useState(false);

  const onButtonClick = () => {
    setButtonState(!buttonState)
    onToggle();
  }

  return (
    <div >
      <button
        onClick={onButtonClick}
        className={ buttonState ? 'active': ''}
      >
        {message}
      </button>
    </div>
  );
}

export default Button;