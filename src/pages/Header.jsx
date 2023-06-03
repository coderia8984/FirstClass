import React from 'react';
import * as style from '../styles/style';
import { ReactComponent as Logo } from '../styles/icons/Skyscanner_Logo_LockupHorizontal_SkyBlue_RGB.svg';
import { useNavigate } from 'react-router-dom';

function Header() {
  // login 유무 변수(수정 필요)
  const isLogged = true;
  const color = '#05203c';

  // 버튼 클릭 이벤트 메인 페이지 이동
  const navigate = useNavigate();
  const navigateToMain = () => {
    navigate('/');
  };

  return (
    <>
      <style.HeaderContainer backgroundColor={color}>
        <style.HeaderLogoLoginBox onClick={navigateToMain}>
          <Logo width='250' height='30' />
          {/* 로그인 유무에 따라 로그인 버튼 변경 (수정 필요) */}
          <style.LoginOutBtn>
            {isLogged ? '로그인' : '로그아웃'}
          </style.LoginOutBtn>
        </style.HeaderLogoLoginBox>
      </style.HeaderContainer>
    </>
  );
}

export default Header;
