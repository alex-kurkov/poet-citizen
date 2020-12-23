import React from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import config from '../config';
import { FooterExtLink, FooterText } from './Texts';

const FooterSocNetBox = styled.ul`
  display: grid;
  grid-template-rows: repeat(2, 28px);
  grid-template-columns: repeat(1, auto);
  grid-row-gap: 12px;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 440px) {
  }
`;

const FooterSocNetBoxLiItem = styled.li`
  list-style-type: none;
  margin: 0 0;
  padding: 0;
`;

const FooterStyledLinksBar = styled.nav`
  box-sizing: border-box;
  height: 100%;
  padding: 0;

  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 440px) {
  }
`;

const FooterSocNetLinksContainer = styled.ul`
  display: grid;
  grid-template-rows: repeat(1, auto);
  grid-template-columns: repeat(4, auto);
  grid-column-gap: 20px;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 440px) {
  }
`;

const FooterSocNetLiItem = styled.li`
  list-style-type: none;
  margin: 0 0;
  padding: 0 4px;
`;

const FooterSocNetIcon = styled.img`
width: 100%;
height: 100%;
pointer-events: all;
`;


const FooterSocialNet = () => {
  const { socialNetLinks } = config;
  console.log('socialNetLinks', socialNetLinks);
  socialNetLinks.map((icon, i) => console.log(icon));
  socialNetLinks.map(({ link, svg }, i) => console.log(svg));
  return (
    <FooterSocNetBox>
      <FooterSocNetBoxLiItem>
        <FooterStyledLinksBar>
          <FooterSocNetLinksContainer>
            {socialNetLinks.map(({ link, svg, name }, i) => (
              <FooterSocNetLiItem key={`footersocnetbar-${i}`}>
                <FooterExtLink href={link} target="_blank">
                  <FooterSocNetIcon src={svg} alt={name} />
                </FooterExtLink>
              </FooterSocNetLiItem>
            ))}
          </FooterSocNetLinksContainer>
        </FooterStyledLinksBar>
      </FooterSocNetBoxLiItem>
      <FooterSocNetBoxLiItem>
        <FooterText>grazhdaninpoet@yandex.ru</FooterText>
      </FooterSocNetBoxLiItem>
    </FooterSocNetBox>
  );
};

FooterSocialNet.propTypes = {};

export default FooterSocialNet;
