import React, { useState } from 'react';
import MessageInput from './MessageInput'
import Chat from './Chat'
import { MessageProvider } from './MessageContext'
import './App.css';

type Message = {
  author: string,
  text: string,
  timeStamp: string
};

const App: React.FC = () => {

  const initialMessages: Message[] = [];


  const [messages, setMessages] = useState(initialMessages);

  const onMessageSubmit = (message: string) => {
    const timeStamp = new Date();
    const newMessage = {
      author: 'Anon',
      text: message,
      timeStamp: `${timeStamp.getHours()}:${timeStamp.getMinutes()}`
    }

    setMessages([...messages, newMessage])
  }

  return (
    <div className="App">
      <MessageProvider value={messages}>
        <div className="chat"><Chat/></div>
      </MessageProvider>
      <div className="messageInput">
        <MessageInput
          onMessageSubmit={onMessageSubmit}
        />
      </div>
    </div>
  );
}

export default App;
