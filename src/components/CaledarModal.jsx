import React from "react";
import { CalendarModalContainer } from "../styles/style";

function CaledarModal({ setModalOpen }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <CalendarModalContainer>
      <button onClick={closeModal}>
        X
      </button>
    </CalendarModalContainer>
  );
}

export default CaledarModal;
