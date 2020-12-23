import React from 'react';
import styled from 'styled-components/macro';
import FooterLinksBar from './FooterLinksBar';
import FooterSocialNet from './FooterSocialNet';
import FooterTradeMark from './FooterTradeMark';

const AppFooter = styled.footer` 
  box-sizing: border-box;
  width: 1440px;
  margin: 92px auto 0;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 1.38;
 color: #000000;

  @media screen and (max-width: 767px) {

  }

  @media screen and (max-width: 440px) {

  }
`;


const Footer = () => {
  return (
    <AppFooter>
      <FooterLinksBar />
      <FooterSocialNet />
      <FooterTradeMark />
    </AppFooter>
  );
};

Footer.propTypes = {
};

export default Footer;
