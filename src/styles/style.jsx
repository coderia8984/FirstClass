import styled from "styled-components";

// 공통 레이아웃
// 1. flexbox, 가운데 정렬
export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 2. flexbox, 가운데 정렬, column 방향 정렬
export const FlexCenterColumn = styled(FlexCenter)`
  flex-direction: column;
`;

// 3. H1 크기 지정
export const H1 = styled.h1`
  font-size: 24pt;
  font-weight: bold;
`;

// Main
// 1. Main Header
export const MainHeaderBack = styled(FlexCenterColumn)`
  width: 100%;
  height: 350px;
  background-color: #05203c;

  padding: 30px;
`;

// 2. Main Logo & 로그인
export const MainLogoLoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 50px; */

  width: 1000px;
  height: 50px;
  /* border: 1px solid white; */
`;

// 3. Main 문구
export const MainPhrase = styled.div`
  width: 1000px;
  height: 50px;
  margin: 70px 0px 30px 0px;
  /* border: 1px solid white; */

  color: white;
  font-size: 35px;
`;

// 4. 검색 조건 container
export const MainConditionBox = styled(FlexCenter)`
  width: 1000px;
  height: 100px;
  /* border: 1px solid white; */
  gap: 5px;
`

// 5. 셀렉트 박스
export const MainSelect = styled.select`
  width: 200px;
  height: 40px;
  border: 1px solid white;
`

// 6. 캘린더
export const MainCalendar = styled.div`
  width: 200px;
  height: 40px;
  border: 1px solid white;
  background-color: white;
`

// 7. 인원수 박스
export const MainPersonNumber = styled(FlexCenter)`
  width: 200px;
  height: 40px;
  border: 1px solid white;
  background-color: white;
`

// 8. 검색하기 버튼
export const MainSearchBtn = styled.button`
  width: 150px;
  height: 40px;
  margin-left: 30px;
  border: 1px solid #0062E3;
  background-color: #0062E3;
  color: white;
`

// 9. 로그인 버튼
export const LoginOutBtn = styled.button`
  width: 150px;
  height: 40px;

  border: 1px solid #05203c;
  background-color: #05203c;
  color: white;
`


// 항공편 상세 페이지
// 1. 