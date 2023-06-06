import React, { useEffect, useState } from "react";
import * as style from "../styles/style";
import { ReactComponent as Logo } from "../styles/icons/Skyscanner_Logo_LockupHorizontal_SkyBlue_RGB.svg";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { AuthAPI } from "../axios/api";
import { useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE } from "recoil";

function Header() {
  const color = "#05203c";

  // login 유무 변수(수정 필요)
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    setIsLogged(!!sessionStorage.getItem("RefreshToken"));
  }, [sessionStorage.getItem("RefreshToken")]);

  // let isLogged = false;
  // if (!!sessionStorage.getItem('RefreshToken')) {
  //   isLogged = true;
  // }

  // 로고 클릭 이벤트 메인 페이지 이동
  const navigate = useNavigate();
  const navigateToMain = () => {
    navigate("/");
  };

  // 로그아웃
  const onClickHandler = () => {
    sessionStorage.clear();

    alert('로그아웃이 완료되었습니다.')
    navigate("/");
  };

  return (
    <>
      <style.HeaderContainer backgroundColor={color}>
        <style.HeaderLogoLoginBox>
          <Logo
            width="250"
            height="30"
            cursor="pointer"
            onClick={navigateToMain}
          />
          <style.LoginOutBtn onClick={onClickHandler}>
            {isLogged ? (
              "로그아웃"
            ) : (
              <a href={process.env.REACT_APP_SERVER_URL + "/auth/kakao"}>
                로그인
              </a>
            )}
          </style.LoginOutBtn>
        </style.HeaderLogoLoginBox>
      </style.HeaderContainer>
    </>
  );
}

export default Header;
