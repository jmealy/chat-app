import React, { useState, createContext } from 'react';
import MessageInput from './MessageInput'
import Chat from './Chat'
import { MessageProvider } from './MessageContext'
import './App.css';

type Message = {
  author: string,
  text: string,
  timeStamp: string
};

const ChatContext = createContext('default');

const testMessages = [
  { author: "yo", text: "hi there this is a message for the chat", timeStamp: '17.07'},
  { author: "Anonymous", text: "hi there this is another  message for the chat, how you like that?", timeStamp: '17.07'},
  { author: "Anonymous", text: "hi there", timeStamp: '17.07'},
  { author: "Anonymous", text: "hi there this is a message for the chat", timeStamp: '17.07'},
  { author: "Anonymous", text: "hi there this is another  message for the chat, how you like that?", timeStamp: '17.07'},
  { author: "Anonymous", text: "hi there", timeStamp: '17.07'},
  { author: "Anonymous", text: "hi there this is a message for the chat", timeStamp: '17.07'},
  { author: "Anonymous", text: "hi there this is another  message for the chat, how you like that?", timeStamp: '17.07'},
  // { author: "yo", text: "hi there", timeStamp: '17.07'},
]


const App: React.FC = () => {

  const initialMessages: Message[] = [];


  const [messages, setMessages] = useState(initialMessages);

  const onMessageSubmit = (message: string) => {
    const timeStamp = new Date();
    const newMessage = {
      author: 'anon',
      text: message,
      timeStamp: `${timeStamp.getHours()}:${timeStamp.getMinutes()}`
    }

    setMessages([...messages, newMessage])
    console.log(messages);
  }

  return (
    <div className="App">
      <MessageProvider value={testMessages}>
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

  // return (
  //   <div className="App">
  //     <Button
  //       message = "toggle button"
  //       onToggle={()=>{ console.log('toggle')}}
  //     />
  //   </div>
  // );
// }

export default App;
