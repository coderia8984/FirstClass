import React from "react";
import * as style from "../styles/style";
import { ReactComponent as LeftArrow } from "../styles/icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../styles/icons/right-arrow.svg";

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
            <LeftArrow width="10px" height="10px"/>
            <span>&nbsp;06월 10일&nbsp;</span>
            <RightArrow width="10px" height="10px"/>
          </style.DetailDateBox>
        </style.DetailHeader>
      </style.DetailHeaderContainer>
    </>
  );
}

export default Detail;
