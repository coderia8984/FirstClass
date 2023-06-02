import React from 'react';
import * as style from '../styles/style';
import { ReactComponent as LeftArrow } from '../styles/icons/left-arrow.svg';
import { ReactComponent as RightArrow } from '../styles/icons/right-arrow.svg';
import DetailFlight from '../components/DetailFlight';
import { Button, DatePicker } from 'antd';

// 날짜 onChange 적용 함수
const onChangeDate = (...rest) => {
  const date = rest[1].replace(/-/g, '');
};

function Detail() {
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
