import React from 'react';
import './MessageInput.css';

type MessageInputProps = {};

const MessageInput = ({}: MessageInputProps) => {

  return (
    <div className="container">
      <div className="inputGroup">
        <input className="textInput" type="text"></input>
        <button className="submitButton">Submit</button>
      </div>
    </div>
  );
}

export default MessageInput;