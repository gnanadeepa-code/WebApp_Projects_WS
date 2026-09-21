import { useState } from "react"; //Named exports
import { ChatInput } from "./components/ChatInput";
import  ChatMessages  from "./components/ChatMessages"; //Default Exports
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatbox",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How can I help You?",
      sender: "robot",
      id: "id2",
    },
    {
      message: "What is current date",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is 19th September 2016",
      sender: "robot",
      id: "id4",
    },
  ]);

  /*const [chatMessages,setChatMessages] = chatMessagesArray;

            const chatMessages = chatMessagesArray[0];
            const setChatMessages = chatMessagesArray[1]; */

  return (
    <div className="app-container">
      {/*  {ChatInput()} */}

      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
