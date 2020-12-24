import React from 'react';
import styled from 'styled-components/macro';
import FooterLinksBar from './FooterLinksBar';
import FooterSocialNet from './FooterSocialNet';
import FooterTradeMark from './FooterTradeMark';

const FooterSection = styled.footer`
  background: #212228;
  height: 196px;
  width: 100%;
`;
const FooterWrap = styled.footer`
  background: none;
  box-sizing: border-box;
  padding: 36px 156px 92px 156px;
  width: 1440px;
  margin: 92px auto 0;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 1.38;
  color: #fff;

  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 440px) {
  }
`;


const Footer = () => {
  return (
    <FooterSection>
      <FooterWrap>
        <FooterLinksBar />
        <FooterSocialNet />
        <FooterTradeMark />
      </FooterWrap>
    </FooterSection>
  );
};

Footer.propTypes = {
};

export default Footer;
