import React from "react";
import * as style from "../styles/style";
import { Button } from "antd";

function ChatModal({ isOpen, closeModal }) {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <style.DetailButtonModal>
        <span>공항</span>
        <span>시간</span>
        <Button type="primary" size={"large"} onClick={closeModal}>
          닫기
        </Button>
      </style.DetailButtonModal>
    </div>
  );
}

export default ChatModal;
