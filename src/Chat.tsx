import React, { useContext } from 'react';
import MessageContext from './MessageContext'
import './Chat.css';

type Message = {
  author: string,
  text: string,
  timeStamp: string
};

const Chat = () => {

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
    <>
      {
        messages.map((message, index) => (
          renderMessage(message)
        ))
      }
    </>
  );
}

export default Chat;