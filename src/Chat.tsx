import React from 'react';
import './Chat.css';

type ChatProps = {};

type Message = {
  author: string,
  text: string,
  timeStamp: string
};

const Chat = ({}: ChatProps) => {

  const messages = [
    { author: "yo", text: "hi there this is a message for the chat", timeStamp: '17.07'},
    { author: "Anonymous", text: "hi there this is another  message for the chat, how you like that?", timeStamp: '17.07'},
    // { author: "Anonymous", text: "hi there", timeStamp: '17.07'},
    // { author: "Anonymous", text: "hi there this is a message for the chat", timeStamp: '17.07'},
    // { author: "Anonymous", text: "hi there this is another  message for the chat, how you like that?", timeStamp: '17.07'},
    // { author: "Anonymous", text: "hi there", timeStamp: '17.07'},
    // { author: "Anonymous", text: "hi there this is a message for the chat", timeStamp: '17.07'},
    // { author: "Anonymous", text: "hi there this is another  message for the chat, how you like that?", timeStamp: '17.07'},
    // { author: "yo", text: "hi there", timeStamp: '17.07'},
  ]

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