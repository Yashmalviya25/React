import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(22),
        })
      );
    }, 500);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="ml-2 p-2 h-[600px] border bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse border-black">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form className="w-full ml-2" onSubmit={(e) =>{
        e.preventDefault();
        dispatch(
          addMessage({
            name:"Yash",
            message: liveMessage
          })
        )
        setLiveMessage('');
      }}>
        <input
          className="border border-black w-96 rounded-lg m-1"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          type="text"
        />
        <button className="bg-slate-200 shadow-md rounded-lg hover:bg-slate-300 w-16">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
