import React from 'react';
import { Link } from 'react-router-dom';
/* import PropTypes from 'prop-types'; */
import styled from 'styled-components/macro';

const LogoWrap = styled(Link)`
  width: 72px;
  height: 32px;
  display: block;
  cursor: inherit;
  background-color: gray;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  
  &:hover {
    opacity: 0.6;
  }
  @media screen and (max-width: 1023px) {

  }
  
  @media screen and (max-width: 767px) {
  }
  
  @media screen and (max-width: 440px) {
  }
`;
const ClickablePath = styled.path`
cursor: pointer;
`;
const SvgButton = styled.svg`
width: 100%;
height: 100%;
pointer-events: all;
`;

const Logo = () => (
    <LogoWrap to="/main"
/*     isBlurred={isBlurred} */
    rel="Гражданин поэт">
      <SvgButton
        viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ClickablePath d="M0 1.98864V26.1364V50H50L48.2249 0H42.3077L40.8284 17.0455H29.2899L28.4024 1.98864L20.1183 1.42045L21.3018 17.0455H8.87574L6.80473 1.42045L0 1.98864Z" fill="#ee0"/>
      </SvgButton>
    </LogoWrap>
);

Logo.propTypes = {
};

export default Logo;
