import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import './ChatMessages.css';

function ChatMessages({ chatMessages }) {
  //In React we shd not use the DOM manually, instead we shd use React features called useRef() hook to get the html elt we want to manipulate. useRef() lets us automatically save an HTML elt from the component.Now the html elt div which is ref to this chatMessagesRef will be saved inside this ref
  const chatMessagesRef = useRef(null); //null is initial value

  //To add auto scrolling feature in chatbox when a new msg is typed, useEffect hook needs to be used. useEffect lets us to run some code after the component is created or updated.
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]); //The 2nd parameter array called dependency arrays controls when the useEffect will run. [] empty array means only run once after the component is created. since chatMessages is given inside array react will run this function every time chatMessages changes.

  //The map() method loops through an array, applies a function to every item, and returns a brand-new array with the transformed values. It does not modify your original array
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
