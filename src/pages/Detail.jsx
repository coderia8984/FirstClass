import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { Button, DatePicker } from 'antd';
import { Select, Space } from 'antd';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import * as style from '../styles/style';
import DetailFlight from '../components/DetailFlight';
import { AirportAPI } from '../axios/api';

function Detail() {
  const navigate = useNavigate();
  // // token이 없으면 메인 화면으로 돌아가기
  // useEffect(() => {
  //   if (!sessionStorage.getItem('RefreshToken')) {
  //     alert('로그인이 필요합니다.');
  //     navigate('/');
  //   }
  // }, []);

  // 검색 조건 받아오기
  const { search } = useLocation();
  const searchCondition = queryString.parse(search);
  console.log(searchCondition);

  // 항공편 받아오기
  const { data, isLoading, error } = useQuery(['flights'], () =>
    AirportAPI.getFlights(searchCondition)
  );
  if (isLoading || error) {
    return <></>;
  }
  console.log(data);

  // 날짜 onChange 적용 함수
  const onChangeDate = (...rest) => {
    const date = rest[1].replace(/-/g, '');
  };

  // Input 박스
  const handleChange = (value) => {
    console.log(`selected ${value}`);
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
            <DatePicker placeholder='떠나는 날짜' onChange={onChangeDate} />
          </style.DetailDateBox>
        </style.DetailHeader>
      </style.DetailHeaderContainer>
      <style.DetailInputBox>
        <Select
          defaultValue='검색조건'
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: '1',
              label: '빠른시간',
            },
            {
              value: '2',
              label: '늦은시간',
            },
            {
              value: '3',
              label: '최저가',
            },
            {
              value: '4',
              label: '최고가',
            },
          ]}
        />
      </style.DetailInputBox>
      <style.DetailFlightContainer>
        <DetailFlight></DetailFlight>
        <DetailFlight></DetailFlight>
      </style.DetailFlightContainer>
    </>
  );
}

export default Detail;
