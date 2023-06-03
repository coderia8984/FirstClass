import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { searchState } from "../store/searchState";
import { Button, DatePicker, InputNumber } from "antd";
import { useQuery } from "react-query";

import * as style from "../styles/style";
import AirportSelect from "../components/common/AirportSelect";
import "../styles/antdStyle.css";
import { AirportAPI } from "../axios/api";

function Main() {
  const navigate = useNavigate();
  const mainPhrase = "즐겨 찾는 여행 사이트를 빠르고 쉽게 검색하세요";

  // 공항 select State
  const [search, setSearch] = useRecoilState(searchState);

  // 공항정보 받아오기
  const { data, isLoading, error } = useQuery("airport", AirportAPI.getAirport);
  if (isLoading || error) {
    return <></>;
  }
  const airportData = data.data.data;
  const airportArray = airportData.map((airport) => airport.airport_city);

  // onChange 적용 함수
  const onChangeAirport = (name, value) => {
    let newSearch = {
      ...search,
      [name]: value,
    };

    if ((name === "departure") | (name === "arrival")) {
      newSearch = {
        ...newSearch,
        [name+'ID']: airportData.find((airport)=>airport.airport_city===value).airport_id,
      };
    }
    setSearch(newSearch);
  };

  // 날짜 onChange 적용 함수
  const onChangeDate = (...rest) => {
    const date = rest[1].replace(/-/g, "");

    onChangeAirport("date", date);
  };

  // 버튼 클릭 시 적용 함수
  const onClickHandler = () => {
    if (
      (search.departure === "") |
      (search.arrival === "") |
      (search.departure === search.arrival)
    ) {
      alert("공항을 다시 선택해주세요.");
    } else if (search.number <= 0) {
      alert("인원 수를 확인해주세요.");
    } else {
      alert(
        `출발 공항:${search.departure} 출발 ID:${search.departureID} 도착 공항:${search.arrival} 도착 ID:${search.arrivalID} 인원 수: ${search.number}`
      );
      navigate("./detail");
    }
  };

  return (
    <style.MainHeaderBack>
      <style.MainPhrase>{mainPhrase}</style.MainPhrase>
      <style.MainConditionContainer>
        <style.MainConditionBox>
          <div>출발지</div>
          <AirportSelect
            placeholder="출발지"
            name="departure"
            airportData={airportArray}
            onChange={onChangeAirport}
          />
        </style.MainConditionBox>

        <style.MainConditionBox>
          <div>도착지</div>
          <AirportSelect
            placeholder="도착지"
            name="arrival"
            airportData={airportArray}
            onChange={onChangeAirport}
          />
        </style.MainConditionBox>

        <style.MainConditionBox>
          <div>떠나는 날짜</div>
          <DatePicker placeholder="떠나는 날짜" onChange={onChangeDate} />
        </style.MainConditionBox>

        <style.MainConditionBox>
          <div>인원 수</div>
          <InputNumber
            placeholder="인원 수"
            min={0}
            onChange={(number) => onChangeAirport("number", number)}
          />
        </style.MainConditionBox>

        {/* <style.MainSearchBtn onClick={onClickHandler}>
          검색하기
        </style.MainSearchBtn> */}
        <Button
          type="primary"
          size={"large"}
          onClick={onClickHandler}
          className="searchBtn"
          style={{
            height: "80px",
          }}
        >
          검색하기
        </Button>
      </style.MainConditionContainer>
    </style.MainHeaderBack>
  );
}

export default Main;
