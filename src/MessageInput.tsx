import React, {useRef} from 'react';
import './MessageInput.css';

type MessageInputProps = {
  onMessageSubmit(message: String): void;
};

const MessageInput = ({onMessageSubmit}: MessageInputProps) => {
  // initialise with null, but tell TypeScript we are looking for an HTMLInputElement
  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = (event: any) => {
    if(!inputEl || !inputEl.current) return;
    event.preventDefault();

    const text = inputEl.current.value;
    console.log(text);

    if (text.length > 0) {
      inputEl.current.value = '';
    }
  };

  return (
    <div className="container">
      <form className="inputGroup" onSubmit={onButtonClick}>
        <input className="textInput" ref={inputEl} type="text"></input>
        {/* <button className="submitButton" onClick={onButtonClick} >Submit</button> */}
        <input className="submitButton" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default MessageInput;