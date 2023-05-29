import React, { useState } from "react";
import * as style from "../styles/style";
import Calendar from "react-calendar";
import AirportSelect from "../components/common/AirportSelect";
import CaledarModal from "../components/CaledarModal";

function Main() {
  const mainPhrase = "즐겨 찾는 여행 사이트를 빠르고 쉽게 검색하세요";

  // 공항 select State
  const [airport, setAirport] = useState({
    departure: "공항선택",
    arrival: "공항선택",
  });
  const { departure, arrival } = airport;

  // onChange 적용 함수
  const onChangeAirport = (changeObj) => {
    const { name, value } = changeObj.target;

    const newAirport = {
      ...airport,
      [name]: value,
    };

    setAirport(newAirport);
  };

  // 캘린더 모달창 노출 여부 state
  const [calendarModalOpen, setCalendarModalOpen] = useState(false);
  
  // 캘린더 모달창 open
  const showCalendarModal = () => {
    setCalendarModalOpen(true);
  };

  // 버튼 클릭 시 적용 함수
  const onClickHandler = () => {
    alert(`출발 공항:${airport.departure} 도착 공항:${airport.arrival}`);
  };

  return (
    <style.MainHeaderBack>
      <style.MainPhrase>{mainPhrase}</style.MainPhrase>
      <style.MainConditionBox>
        <AirportSelect
          name="departure"
          value={departure}
          onChange={onChangeAirport}
        />
        <AirportSelect
          name="arrival"
          value={arrival}
          onChange={onChangeAirport}
        />
        <style.MainCalendar onClick={showCalendarModal}>떠나는 날짜</style.MainCalendar>
        {calendarModalOpen && <CaledarModal setModalOpen={setCalendarModalOpen} />}
        <style.MainPersonNumber>인원 수</style.MainPersonNumber>
        <style.MainSearchBtn onClick={onClickHandler}>
          검색하기
        </style.MainSearchBtn>
      </style.MainConditionBox>
    </style.MainHeaderBack>
  );
}

export default Main;
