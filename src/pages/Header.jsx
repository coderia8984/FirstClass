import React from 'react';
import * as style from '../styles/style';
import { ReactComponent as Logo } from '../styles/icons/Skyscanner_Logo_LockupHorizontal_SkyBlue_RGB.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { AuthAPI } from '../axios/api';

function Header() {
  // login 유무 변수(수정 필요)
  const isLogged = false;
  const color = '#05203c';

  // 로고 클릭 이벤트 메인 페이지 이동
  const navigate = useNavigate();
  const navigateToMain = () => {
    navigate('/');
  };

  // 로그인
  const onClickHandler = () => {
    // if (isLogged) {

    // } else {
    //   const kakao = process.env.REACT_APP_SERVER_URL + 'auth/kakao'
    //   return <a href={kakao}/>
    // }
  }

  return (
    <>
      <style.HeaderContainer backgroundColor={color}>
        <style.HeaderLogoLoginBox>
          <Logo width='250' height='30' cursor="pointer" onClick={navigateToMain} />
          {/* 로그인 유무에 따라 로그인 버튼 변경 (수정 필요) */}
          <style.LoginOutBtn onClick={onClickHandler}>
            {isLogged ? '로그아웃' : <a href='http://52.79.197.128/auth/kakao'>로그인</a>}
          </style.LoginOutBtn>
        </style.HeaderLogoLoginBox>
      </style.HeaderContainer>
    </>
  );
}

export default Header;
