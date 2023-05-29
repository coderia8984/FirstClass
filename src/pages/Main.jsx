import React from "react";
import * as style from "../styles/style";

function Main() {
  const mainPhrase = '즐겨 찾는 여행 사이트를 빠르고 쉽게 검색하세요'
  return (
    <style.MainHeaderBack>
      <style.MainPhrase>{mainPhrase}</style.MainPhrase>
      <style.MainConditionBox>
        <style.MainSelect>
          <option key="apple" value="apple">
            사과
          </option>
          <option key="orange" value="orange">
            오렌지
          </option>
        </style.MainSelect>
        <style.MainSelect>
          <option key="apple" value="apple">
            사과
          </option>
          <option key="orange" value="orange">
            오렌지
          </option>
        </style.MainSelect>
        <style.MainCalendar>떠나는 날짜</style.MainCalendar>
        <style.MainPersonNumber>인원 수</style.MainPersonNumber>
        <style.MainSearchBtn>검색하기</style.MainSearchBtn>
      </style.MainConditionBox>
    </style.MainHeaderBack>
  );
}

export default Main;
