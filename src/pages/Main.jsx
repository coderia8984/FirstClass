import React, { useState } from "react";
import * as style from "../styles/style";
import { useSelector } from "react-redux";
import AirportSelect from "../components/common/AirportSelect";

function Main() {
  const mainPhrase = "즐겨 찾는 여행 사이트를 빠르고 쉽게 검색하세요";

  // 공항을 담고 있는 배열 -> 나중에 db get 으로 변경해야 함(수정 필요)
  const airportArray = ["인천", "부산", "김해", "제주", "대구", "여수"];

  // 공항 select State
  const [airport, setAirport] = useState({ departure: "공항선택", arrival: "공항선택" });
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

  // 버튼 클릭 시 적용 함수
  const onClickHandler = () => {
    alert(`출발 공항:${airport.departure} 도착 공항:${airport.arrival}`);
  };

  return (
    <style.MainHeaderBack>
      <style.MainPhrase>{mainPhrase}</style.MainPhrase>
      <style.MainConditionBox>
        <AirportSelect name="departure" value={departure} onChange={onChangeAirport}/>
        <AirportSelect name="arrival" value={arrival} onChange={onChangeAirport}/>
        <style.MainCalendar>떠나는 날짜</style.MainCalendar>
        <style.MainPersonNumber>인원 수</style.MainPersonNumber>
        <style.MainSearchBtn onClick={onClickHandler}>검색하기</style.MainSearchBtn>
      </style.MainConditionBox>
    </style.MainHeaderBack>
  );
}

export default Main;
