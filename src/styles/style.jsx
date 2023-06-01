import styled from 'styled-components';

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

// Header
// 1. Header Container
export const HeaderContainer = styled(FlexCenterColumn)`
  width: 100%;
  height: 70px;
  background-color: ${(props) => props.backgroundColor};

  padding: 20px 0px;
`;

// 2. login, Logo Box
export const HeaderLogoLoginBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  /* margin-bottom: 50px; */

  width: 1080px;
  height: 50px;
  /* border: 1px solid white; */
`;

// 3. 로그인 버튼
export const LoginOutBtn = styled.button`
  width: 150px;
  height: 40px;
  font-weight: 700;
  font-size: 16px;

  border: 1px solid #05203c;
  background-color: #05203c;
  color: white;
  cursor: pointer;
`;

// Main
// 1. Main Header
export const MainHeaderBack = styled(FlexCenterColumn)`
  width: 100%;
  height: 250px;
  background-color: #05203c;
`;

// 2. Main 문구
export const MainPhrase = styled.div`
  width: 1000px;
  height: 50px;

  /* border: 1px solid white; */

  color: white;
  font-size: 35px;
  font-weight: 700;
`;

// 3. 검색 조건 container
export const MainConditionContainer = styled(FlexCenter)`
  width: 2000px;
  height: 100px;
  padding-top: 20px;
  /* border: 1px solid white; */
  gap: 5px;
`;

// 4. 검색 조건 box
export const MainConditionBox = styled(FlexCenterColumn)`
  width: 220px;
  height: 80px;
  background-color: white;
  border: 1px solid white;
  border-radius: 10px;
  gap: 5px;

  > div {
    font-weight: 800;
  }
`

// 7. 검색하기 버튼
export const MainSearchBtn = styled.button`
  width: 150px;
  height: 60px;
  margin-left: 30px;
  border: 1px solid #0062e3;
  background-color: #0062e3;
  color: white;
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
`;

// 항공편 상세 페이지
// 1. 상세 header container
export const DetailHeaderContainer = styled(FlexCenter)`
  width: 100%;
  height: 80px;
  background-color: #05203c;
`;

// 2. 상세 header
export const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1000px;
  height: 40px;
  padding: 1px;
`;

// 3. 상세 header의 사용자 검색조건 box
export const DetailUserBox = styled(FlexCenterColumn)`
  width: 300px;
  height: 100%;
`;

// 4. 사용자 검색조건 box -> 출발지 & 도착지
export const DetailDepartArriv = styled.div`
  width: 300px;
  height: 50%;

  font-size: 15px;
  color: white;
  margin-left: 200px;
  font-weight: 700;
`;

// 5. 사용자 검색조건 box -> 인원 & 등급
export const DetailNumClass = styled.div`
  width: 300px;
  height: 50%;
  color: white;
  font-weight: 700;
  margin: 10px 0px 20px 200px;
`;

// 6. 날짜 선택 box
export const DetailDateBox = styled(FlexCenter)`
  width: 300px;
  height: 100%;
  color: white;
`;

// 7. 항공편 container
export const DetailFlightContainer = styled(FlexCenterColumn)`
  width: 800px;
  margin-top: 50px;
  padding: 10px;
  gap: 12px;
`;

// 8. 항공편 Box
export const DetailFlightBox = styled(FlexCenter)`
  margin: 0 auto;
  width: 100%;
  height: 120px;
  margin-bottom: 20px;
`;

// 9. 항공편 시간&코드 Box
export const DetailFlightTimeBox = styled(FlexCenter)`
  width: 70%;
  height: 100%;
  border-radius: 0.75rem 0 0 0.75rem;
  border: 1px solid gray;
`;

// 9. 항공편 가격&선택하기 Box
export const DetailPriceSelectBox = styled.div`
  width: 30%;
  height: 100%;
  border: 1px solid gray;
  border-radius: 0 0.75rem 0.75rem 0;
`;

// 10. 항공편 시간
export const DetailTime = styled(FlexCenterColumn)`
  width: 30%;
`;

// 11. 항공편 이동 시간
export const DetailTravelTime = styled.div`
  width: 40%;
`;

// 12. 항공편 이동 시간 div
export const DetailTravleDiv = styled.div`
  width: 90%;
  height: 50%;
  border-bottom: 1px solid gray;
`;
