import React from "react";
import {
  MainHeaderBack,
  MainLogoLoginBox,
  MainPhrase,
  MainSelect,
  MainConditionBox,
  MainCalendar,
  MainPersonNumber,
  MainSearchBtn,
  LoginOutBtn
} from "../styles/style";

function Main() {
  return (
    <MainHeaderBack>
      <MainLogoLoginBox>
        <LoginOutBtn>로그인</LoginOutBtn>
      </MainLogoLoginBox>
      <MainPhrase>즐겨 찾는 여행 사이트를 빠르고 쉽게 검색하세요</MainPhrase>
      <MainConditionBox>
        <MainSelect>
          <option key="apple" value="apple">
            사과
          </option>
          <option key="orange" value="orange">
            오렌지
          </option>
        </MainSelect>
        <MainSelect>
          <option key="apple" value="apple">
            사과
          </option>
          <option key="orange" value="orange">
            오렌지
          </option>
        </MainSelect>
        <MainCalendar>떠나는 날짜</MainCalendar>
        <MainPersonNumber>인원 수</MainPersonNumber>
        <MainSearchBtn>검색하기</MainSearchBtn>
      </MainConditionBox>
    </MainHeaderBack>
  );
}

export default Main;
