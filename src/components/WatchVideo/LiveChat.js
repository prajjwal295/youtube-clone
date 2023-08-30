import React, { useEffect } from "react";
import Chats from "./Chats";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/ChatSlice";
import { makeid, generate } from "../../config/helper";
const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // api polling
      console.log("api  poling");
      dispatch(
        addMessage({
          name: generate(),
          message: makeid(20),
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div className="h-[520px] w-[400px] border-2 border-black bg-yellow-100 rounded-md overflow-y-scroll  flex-col-revers">
      LiveChat
      {chatMessages?.map((c, i) => (
        <Chats name={c?.name} message={c?.message} i={i} />
      ))}
    </div>
  );
};

export default LiveChat;
