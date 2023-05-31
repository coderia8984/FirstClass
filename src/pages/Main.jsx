import React, { useState } from "react";
import * as style from "../styles/style";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeRequire } from "../redux/modules/userSearchSlice";
import AirportSelect from "../components/common/AirportSelect";
import { useRecoilState } from "recoil";
import { searchState } from "../store/searchState";
import { Button, DatePicker, InputNumber } from "antd";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mainPhrase = "즐겨 찾는 여행 사이트를 빠르고 쉽게 검색하세요";

  // 공항 select State
  const [search, setSearch] = useRecoilState(searchState);

  // onChange 적용 함수
  const onChangeAirport = (name, value) => {
    // const { name, value } = changeObj.target;

    const newSearch = {
      ...search,
      [name]: value,
    };

    setSearch(newSearch);
  };

  // 날짜 onChange 적용 함수
  const onChangeDate = (...rest) => {
    const date = rest[1].replace(/-/g, "");

    onChangeAirport("date", date);
  };

  // 버튼 클릭 시 적용 함수
  const onClickHandler = () => {
    console.log(search);
    // if (
    //   (search.departure === "") |
    //   (search.arrival === "") |
    //   (search.departure === search.arrival)
    // ) {
    //   alert("공항을 다시 선택해주세요.");
    // } else if (number <= 0) {
    //   alert("인원 수를 확인해주세요.");
    // } else {
    //   alert(
    //     `출발 공항:${search.departure} 도착 공항:${search.arrival} 인원 수: ${number}`
    //   );
    //   dispatch(
    //     changeRequire({
    //       departure: search.departure,
    //       arrival: search.arrival,
    //       date: "",
    //       number: number,
    //     })
    //   );
    //   navigate("./detail");
    // }
  };

  return (
    <style.MainHeaderBack>
      <style.MainPhrase>{mainPhrase}</style.MainPhrase>
      <style.MainConditionBox>
        <AirportSelect
          placeholder="출발지"
          name="departure"
          onChange={onChangeAirport}
        />
        <AirportSelect
          placeholder="도착지"
          name="arrival"
          onChange={onChangeAirport}
        />
        <DatePicker placeholder="떠나는 날짜" onChange={onChangeDate} />
        <InputNumber
          placeholder="인원 수"
          min={0}
          onChange={(number) => onChangeAirport("number", number)}
        />
        {/* <style.MainSearchBtn onClick={onClickHandler}>
          검색하기
        </style.MainSearchBtn> */}
        <Button type="primary" size={"large"} onClick={onClickHandler}>
          검색하기
        </Button>
      </style.MainConditionBox>
    </style.MainHeaderBack>
  );
}

export default Main;
