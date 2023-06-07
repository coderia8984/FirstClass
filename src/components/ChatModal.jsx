import React, { useState } from "react";
import * as style from "../styles/style";
import { Button, Modal, List, Input, Space } from "antd";
import { io } from "socket.io-client";

const socket = io(`ws://${process.env.REACT_APP_SERVER_URL.split('/')[2]}`, {
  transports: ["websocket"],
  withCredentials: true,
});

function ChatMessage({ sender, chatMessage }) {
  return (
    <div className="chatBubble">
      <div className="sender"> {sender} </div>
      <div className="message"> {chatMessage} </div>
    </div>
  );
}

function ChatModal({ title, open, onOk, onCancel }) {
  const [textCont, setTextCont] = useState(""); // 보내는 메세지
  const [totalUser, setTotalUser] = useState(0); // 총 유저 수
  const [userId, setUserId] = useState(""); // 유저 ID
  const [messages, setMessages] = useState([]); // 유저 대화 기록

  socket.on("userId", (userId) => {
    // 유저 ID 전달
    setUserId(userId);
  });

  const textOnChange = (event) => {
    // inputBox 텍스트 변동 감지
    setTextCont(event.target.value);
  };

  const sendMsg = () => {
    // 서버로 내 메세지 전송
    socket.emit("sendMsg", textCont);
    setTextCont("");
  };

  socket.on("emitMsg", (msgData) => {
    // 서버로부터 다른 유저의 메세지 수신
    const { sender, message } = msgData;
    setMessages([...messages, { sender, message }]);
  });

  socket.on("totalUser", (totalUser) => {
    // 전체 유저 수 반환
    setTotalUser(totalUser);
  });

  socket.on("enterance", (userEnter) => {
    // 유저 입장 알림
    setMessages([...messages, userEnter]);
  });

  socket.on("disconnect", (userExit) => {
    // 유저 퇴장 알림
    setMessages([...messages, userExit]);
  });

  return (
    <Modal
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      width={1000}
      footer={[]}
    >
      <List
        itemLayout="horizontal"
        dataSource={messages}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta title={item.sender} description={item.message} />
          </List.Item>
        )}
      />
      <Space.Compact
        style={{
          width: "100%",
        }}
      >
        <Input placeholder="메시지를 입력하세요." onChange={textOnChange} />
        <Button type="primary" onClick={sendMsg}>전송</Button>
      </Space.Compact>
    </Modal>
  );
}

export default ChatModal;
