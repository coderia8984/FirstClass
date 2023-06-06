import React from "react";
import * as style from "../styles/style";
import { Button } from "antd";

function ChatModal({ isOpen, closeModal }) {
  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <style.ModalContainer>
        <style.DetailButtonModal>
          <Button type='primary' size={'large'} onClick={closeModal}>
            닫기
          </Button>
        </style.DetailButtonModal>
      </style.ModalContainer>
    </div>
  );
}

export default ChatModal;
