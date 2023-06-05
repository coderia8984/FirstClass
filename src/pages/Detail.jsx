import React from "react";
import { useRecoilValue } from "recoil";
import { Button, DatePicker } from "antd";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import * as style from "../styles/style";
import DetailFlight from "../components/DetailFlight";
import { AirportAPI } from "../axios/api";

function Detail() {
  // 검색 조건 받아오기
  const { search } = useLocation();
  const searchCondition = queryString.parse(search);
  console.log(searchCondition);

  // 항공편 받아오기
  const { data, isLoading, error } = useQuery(["flights"], () =>
    AirportAPI.getFlights(searchCondition)
  );
  if (isLoading || error) {
    return <></>;
  }
  console.log(data);

  // 날짜 onChange 적용 함수
  const onChangeDate = (...rest) => {
    const date = rest[1].replace(/-/g, "");
  };

  return (
    <>
      <style.DetailHeaderContainer>
        {/* 상세페이지 헤더 */}
        <style.DetailHeader>
          <style.DetailUserBox>
            <style.DetailDepartArriv>
              <span>{searchCondition.sairport}</span>
              <span>&nbsp;({searchCondition.s_code})</span>
              <span>&nbsp;→&nbsp;</span>
              <span>{searchCondition.eairport}</span>
              <span>&nbsp;({searchCondition.e_code})</span>
            </style.DetailDepartArriv>
            <style.DetailNumClass>
              <span>{searchCondition.people_num} 성인</span>
              <span>&nbsp;|&nbsp;</span>
              <span>First Class</span>
            </style.DetailNumClass>
          </style.DetailUserBox>
          <style.DetailDateBox>
            <DatePicker placeholder="떠나는 날짜" onChange={onChangeDate} />
          </style.DetailDateBox>
        </style.DetailHeader>
      </style.DetailHeaderContainer>
      <style.DetailFlightContainer>
        <DetailFlight></DetailFlight>
        <DetailFlight></DetailFlight>
      </style.DetailFlightContainer>
    </>
  );
}

export default Detail;
