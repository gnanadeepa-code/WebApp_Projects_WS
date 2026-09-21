import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  function saveInputText(event) {
    setInputText(event.target.value);
  }

  //Lifting the state up - moving the component to outer component lets us to share state bw multiple components
  function sendMessage() {
    console.log(inputText + " msgs:", chatMessages);

    const newChatMessages = [
      ...chatMessages, //spread operator ... keeps the existing data in the array
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(), //generates random 36 digit unique id in js
      },
    ];

    //setChatMessages(newChatMessages);

    //In React state doesnot update immediately, state is updated after all of the code is finished
    const response = Chatbot.getResponse(inputText);
    console.log(response);
    setChatMessages([
      ...newChatMessages, //spread operator ... keeps the existing data in the array
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(), //generates random 36 digit unique id in js
      },
    ]);
    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder="Send a message to chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}
