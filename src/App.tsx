import React, { useState } from 'react';
import MessageInput from './MessageInput'
import Chat from './Chat'
import './App.css';

const App: React.FC = () => {

  return (
    <div className="App">
      <div className="chat"><Chat/></div>
      <div className="messageInput"><MessageInput/></div>
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
