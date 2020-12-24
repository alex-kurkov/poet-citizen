import React from 'react';
import styled from 'styled-components/macro';
/* import PropTypes from 'prop-types'; */
import Logo from './Logo';
import LinksBar from './LinksBar';
import { ProfileBtn } from './Buttons/index';

const AppHeader = styled.header`
  box-sizing: border-box;
  width: 1440px;
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #212228;
  color: #F2F2F2;
  gap: 16px;
  overflow: hidden;

  @media screen and (max-width: 767px) {

  }

  @media screen and (max-width: 440px) {

  }
`;

const Header = ({onProfileBtnClick, loggedIn}) => (
    <AppHeader>
      <Logo />
      <LinksBar />
      <ProfileBtn loggedIn={loggedIn} onClick={onProfileBtnClick}/>
    </AppHeader>
);

Header.propTypes = {
};

export default Header;
