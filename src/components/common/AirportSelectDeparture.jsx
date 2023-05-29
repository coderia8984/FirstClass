import React from 'react';
import * as style from '../../styles/style';

function AirportSelectDeparture({ name, value, onChange }) {
  // 공항을 담고 있는 배열 -> 나중에 db get 으로 변경해야 함(수정 필요)
  const airportArray = [
    '공항선택',
    '인천',
    '부산',
    '김해',
    '제주',
    '대구',
    '여수',
  ];
  return (
    <style.MainSelectDeparture name={name} value={value} onChange={onChange}>
      {airportArray.map((airport) => {
        return (
          <option key={airport} value={airport}>
            {airport}
          </option>
        );
      })}
    </style.MainSelectDeparture>
  );
}

export default AirportSelectDeparture;
