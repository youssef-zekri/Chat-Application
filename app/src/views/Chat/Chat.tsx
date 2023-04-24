import React from "react";
import Friends from "./components/Friends/Friends";
import ChatArea from "./components/ChatArea/ChatArea";

export default function Chat() {
  return (
    <div className="Chat">
      <Friends />
      <ChatArea />
    </div>
  );
}
