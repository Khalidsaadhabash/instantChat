import { UserAuth } from "../context/AuthContext";

const Message = ({ message }) => {
  const { currentUser } = UserAuth();

  console.log(message)
  return (
    <div className="bg-white p-0 m-0">
    <div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img className="" src={message.avatar} alt="Avatar" />
        </div>
      </div>
      <div className="chat-header text-slate-900">{message.name}</div>
      <div className="bg-orange-400 chat-bubble text-stone-50">{message.text}</div>
    </div>
  </div>
  
  );
};

export default Message;
