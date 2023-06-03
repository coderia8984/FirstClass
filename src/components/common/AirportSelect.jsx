import React from 'react';
import { Select } from 'antd';
import { useRecoilValue } from 'recoil';

import { searchState } from '../../store/searchState';

function AirportSelect({ placeholder, name, onChange, airportData }) {
  // 공항을 담고 있는 배열 -> 나중에 db get 으로 변경해야 함(수정 필요)
  // const airportArray = ["인천", "부산", "김해", "제주", "대구", "여수"];

  return (
    <Select
      placeholder={placeholder}
      onChange={(...rest) => onChange(name, rest[0])}
    >
      {airportData.map((airport) => {
        return (
          <Select.Option key={airport} value={airport}>
            {airport}
          </Select.Option>
        );
      })}
    </Select>
  );
}

export default AirportSelect;
