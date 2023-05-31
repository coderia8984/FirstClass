import React from 'react';
import * as style from '../styles/style';

function DetailFlight() {
  return (
    <style.DetailFlightBox>
      {/* 시간 */}
      <style.DetailFlightTimeBox>
        <style.DetailTime>
          <span>13:05</span>

          <span>ICN</span>
        </style.DetailTime>
        <style.DetailTravelTime>
          <style.DetailTravleDiv>2시간 30분</style.DetailTravleDiv>
        </style.DetailTravelTime>
        <style.DetailTime>
          <span>13:05</span>
          <span>ICN</span>
        </style.DetailTime>
      </style.DetailFlightTimeBox>
      {/* 가격 & 선택하기 */}
      <style.DetailPriceSelectBox>
        <span>₩ 1,320,000</span>
        <style.MainSearchBtn>선택하기</style.MainSearchBtn>
      </style.DetailPriceSelectBox>
    </style.DetailFlightBox>
  );
}

export default DetailFlight;
