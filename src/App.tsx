import React, { useState } from 'react';
import MessageInput from './MessageInput'
import Chat from './Chat'
import './App.css';

const App: React.FC = () => {

  const [messages, setMessages] = useState({});

  const onMessageSubmit = (message: string) => {
    const timeStamp = new Date();
    const newMessage = {
      author: 'anon',
      text: message,
      timeStamp: `${timeStamp.getHours()}:${timeStamp.getMinutes()}`
    }
    console.log(newMessage);
  }

  return (
    <div className="App">
      <div className="chat"><Chat/></div>
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
