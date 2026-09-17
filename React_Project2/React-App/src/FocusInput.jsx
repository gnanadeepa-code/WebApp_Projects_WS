import { useRef } from "react";

export const FocusInput = () => {
  const inputRef = useRef(null);

  //refs are used to manipulating the DOM directly without using React to do that work. use sparingly whenever unavoidable.
  const handleInputFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter your name" />
      <button onClick={handleInputFocus}>Focus Input</button>
    </div>
  );
};
