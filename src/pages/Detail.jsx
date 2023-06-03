import React from 'react';
import { useRecoilValue } from 'recoil';
import { Button, DatePicker } from 'antd';
import { useQuery } from "react-query";
import { Navigate, useNavigate } from 'react-router-dom';

import * as style from '../styles/style';
import DetailFlight from '../components/DetailFlight';
import { searchState } from '../store/searchState';
import { AirportAPI } from "../axios/api";


function Detail() {
  // 검색조건 state
  const searchCondition = useRecoilValue(searchState);
  console.log(searchCondition);

  // 항공편 받아오기
  // 공항정보 받아오기
  const { data, isLoading, error } = useQuery("flights", () => AirportAPI.getFlights(searchCondition));
  if (isLoading || error) {
    return <></>;
  }
  console.log(data)


  // 날짜 onChange 적용 함수
  const onChangeDate = (...rest) => {
    const date = rest[1].replace(/-/g, '');
  };

  return (
    <>
      <style.DetailHeaderContainer>
        {/* 상세페이지 헤더 */}
        <style.DetailHeader>
          <style.DetailUserBox>
            <style.DetailDepartArriv>
              <span>인천</span>
              <span>&nbsp;(ICN)</span>
              <span>&nbsp;→&nbsp;</span>
              <span>인천</span>
              <span>&nbsp;(ICN)</span>
            </style.DetailDepartArriv>
            <style.DetailNumClass>
              <span>2 성인</span>
              <span>&nbsp;|&nbsp;</span>
              <span>First Class</span>
            </style.DetailNumClass>
          </style.DetailUserBox>
          <style.DetailDateBox>
            <DatePicker placeholder='떠나는 날짜' onChange={onChangeDate} />
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
