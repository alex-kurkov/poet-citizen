import React from 'react';
import styled from 'styled-components/macro';
/* import PropTypes from 'prop-types'; */
import Logo from './Logo';
import LinksBar from './LinksBar';

const AppHeader = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 64px;
  padding: 20px 152px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  overflow: hidden;

  @media screen and (max-width: 767px) {

  }

  @media screen and (max-width: 440px) {

  }
`;

const Header = () => {
  return (
    <AppHeader>
      <Logo />
      <LinksBar />
{/*       <ProfileBtn /> */}
    </AppHeader>
  );
};

Header.propTypes = {
};

export default Header;