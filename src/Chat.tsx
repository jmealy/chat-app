import React, { useContext } from 'react';
import MessageContext from './MessageContext'
import './Chat.css';

type ChatProps = {};

type Message = {
  author: string,
  text: string,
  timeStamp: string
};

const Chat = ({}: ChatProps) => {

  const messages = useContext(MessageContext)

  const renderMessage = (message: Message) => (
    <div className="message">
      <div className="messageHeader">
        <p className="author">{message.author}</p>
        <p className="timeStamp">{message.timeStamp}</p>
      </div>
      <p className="messageBody">{message.text}</p>
    </div>
  );

  return (
    <div className="chatContainer">
      {
        messages.map((message, index) => (
          renderMessage(message)
        ))
      }
      
    </div>
  );
}

export default Chat;