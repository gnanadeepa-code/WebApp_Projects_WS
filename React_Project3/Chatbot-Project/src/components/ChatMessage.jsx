import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";
import "./ChatMessage.css";

export function ChatMessage({ message, sender }) {
  // Destructuring the props directly in the fuction argument
  // console.log(props);
  /* const message = props.message;
            const sender = props.sender; */
  // const {message,sender} = props;

  /* if (sender === "robot") {
                return (
                    <div>
                        <img src="./images/robot.png" width="40" />
                        {message}
                    </div>
                );
            } else {
                return (
                    <div>
                        {message}
                        <img src="./images/user.png" width="40" />
                    </div>
                );
            } */

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {/* Guard operator- && is used instead of if stmt. if the value1 is true then result will be value2  */}
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div class="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}
