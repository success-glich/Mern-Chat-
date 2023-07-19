import React, { useEffect, useState } from "react";
import axios from "axios";
const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    console.log(data.data);
    setChats(data.data);
  };
  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {chats &&
        chats.map((chat, index) => <div key={index}>{chat.chatName}</div>)}
    </div>
  );
};

export default ChatPage;
