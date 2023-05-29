import React, { useState } from "react";
import * as style from "../styles/style";
import Calendar from "react-calendar";
import AirportSelect from "../components/common/AirportSelect";
import CaledarModal from "../components/CaledarModal";
import { ReactComponent as PlusBtn } from "../styles/icons/plus.svg";
import { ReactComponent as MinusBtn } from "../styles/icons/minus.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeRequire } from "../redux/modules/userSearchSlice";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mainPhrase = "즐겨 찾는 여행 사이트를 빠르고 쉽게 검색하세요";

  // 공항 select State
  const [airport, setAirport] = useState({ departure: "", arrival: "" });
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

  // 인원 수 state
  const [number, setNumber] = useState(0);
  const plusNumber = () => {
    setNumber(number + 1);
  };
  const minusNumber = () => {
    setNumber(number - 1);
  };

  // 버튼 클릭 시 적용 함수
  const onClickHandler = () => {
    if (
      (airport.departure === "") |
      (airport.arrival === "") |
      (airport.departure === airport.arrival)
    ) {
      alert("공항을 다시 선택해주세요.");
    } else if (number <= 0) {
      alert("인원 수를 확인해주세요.");
    } else {
      alert(
        `출발 공항:${airport.departure} 도착 공항:${airport.arrival} 인원 수: ${number}`
      );
      dispatch(
        changeRequire({
          departure: airport.departure,
          arrival: airport.arrival,
          date: "",
          number: number
        })
      );
      navigate("./detail");
    }
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
        <style.MainCalendar onClick={showCalendarModal}>
          떠나는 날짜
        </style.MainCalendar>
        {calendarModalOpen && (
          <CaledarModal setModalOpen={setCalendarModalOpen} />
        )}
        <style.MainPersonNumber>
          <div>인원 수</div>
          <style.FlexCenter>
            <MinusBtn
              width="15px"
              height="15px"
              color="black"
              onClick={minusNumber}
            />
            <p>{number}</p>
            <PlusBtn
              width="15px"
              height="15px"
              color="black"
              onClick={plusNumber}
            />
          </style.FlexCenter>
        </style.MainPersonNumber>
        <style.MainSearchBtn onClick={onClickHandler}>
          검색하기
        </style.MainSearchBtn>
      </style.MainConditionBox>
    </style.MainHeaderBack>
  );
}

export default Main;
