import React from "react";
import * as style from "../../styles/style";

function AirportSelect({ name, value, onChange }) {
  // 공항을 담고 있는 배열 -> 나중에 db get 으로 변경해야 함(수정 필요)
  const airportArray = ["인천", "부산", "김해", "제주", "대구", "여수"];
  return (
    <style.MainSelect name={name} value={value} onChange={onChange}>
      {airportArray.map((airport) => {
        return (
          <option key={airport} value={airport}>
            {airport}
          </option>
        );
      })}
    </style.MainSelect>
  );
}

// <style.MainSelect>
//           <option key="apple" value="apple">
//             사과
//           </option>
//           <option key="orange" value="orange">
//             오렌지
//           </option>
//         </style.MainSelect>

export default AirportSelect;
