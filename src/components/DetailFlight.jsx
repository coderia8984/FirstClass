import React from 'react';
import * as style from '../styles/style';
import { Button, DatePicker } from 'antd';

function DetailFlight() {
  return (
    <style.DetailFlightBox>
      {/* 시간 */}
      <style.DetailFlightTimeBox>
        <style.DetailTime>
          <style.DetailTimes>오전 10:05</style.DetailTimes>
          <style.DetailAirports>ICN</style.DetailAirports>
        </style.DetailTime>
        <style.DetailTravelTime>
          <style.DetailTravleDiv>2시간 30분</style.DetailTravleDiv>
          <style.DetailTravleLine></style.DetailTravleLine>
        </style.DetailTravelTime>
        <style.DetailTime>
          <style.DetailTimes>오전 10:05</style.DetailTimes>
          <style.DetailAirports>ICN</style.DetailAirports>
        </style.DetailTime>
      </style.DetailFlightTimeBox>
      {/* 가격 & 선택하기 */}
      <style.DetailPriceSelectBox>
        <style.DetailPrices>₩ 1,320,000</style.DetailPrices>
        <div>
          <Button type='primary' size={'large'}>
            선택하기
          </Button>
        </div>
      </style.DetailPriceSelectBox>
    </style.DetailFlightBox>
  );
}

export default DetailFlight;
