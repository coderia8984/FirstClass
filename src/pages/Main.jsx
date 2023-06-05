import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, DatePicker, InputNumber } from "antd";
import { useQuery } from "react-query";
import queryString from "query-string";

import * as style from "../styles/style";
import AirportSelect from "../components/common/AirportSelect";
import "../styles/antdStyle.css";
import { AirportAPI } from "../axios/api";

function Main() {
  // token 받아오기
  const { search } = useLocation();
  const token = queryString.parse(search);

  // query에 token이 있다면 localStorage에 저장
  if (Object.keys(token).length > 0) {
    sessionStorage.setItem('RefreshToken', token.token)
  }

  const navigate = useNavigate();
  const mainPhrase = "즐겨 찾는 여행 사이트를 빠르고 쉽게 검색하세요";

  // 공항 select State
  const [userSearch, setSearch] = useState({
    departure: "",
    departureID: "",
    departureCode: "",
    arrival: "",
    arrivalID: "",
    arrivalCode: "",
    date: "",
    number: "",
  });

  // 공항정보 받아오기
  const { data, isLoading, error } = useQuery(
    ["airport"],
    AirportAPI.getAirport
  );
  if (isLoading || error) {
    return <></>;
  }
  const airportData = data.data.data;
  // console.log(airportData)
  const airportArray = airportData.map((airport) => airport.airport_city);

  // onChange 적용 함수
  const onChangeAirport = (name, value) => {
    let newSearch = {
      ...userSearch,
      [name]: value,
    };

    if ((name === "departure") | (name === "arrival")) {
      newSearch = {
        ...newSearch,
        [name + "ID"]: airportData.find(
          (airport) => airport.airport_city === value
        ).airport_id,
        [name + "Code"]: airportData.find(
          (airport) => airport.airport_city === value
        ).airport_code,
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
      (userSearch.departure === "") |
      (userSearch.arrival === "") |
      (userSearch.departure === userSearch.arrival)
    ) {
      alert("공항을 다시 선택해주세요.");
    } else if (userSearch.number <= 0) {
      alert("인원 수를 확인해주세요.");
    } else {
      // alert(
      //   `출발 공항:${search.departure} 출발 ID:${search.departureID} 도착 공항:${search.arrival} 도착 ID:${search.arrivalID} 인원 수: ${search.number}`
      // );
      const query = `sairport=${userSearch.departure}&s_id=${userSearch.departureID}&s_code=${userSearch.departureCode.substring(4)}&eairport=${userSearch.arrival}&e_id=${userSearch.arrivalID}&e_code=${userSearch.arrivalCode.substring(4)}&start_datetime=${userSearch.date}&people_num=${userSearch.number}`;
      navigate(`/detail?${query}`);
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
