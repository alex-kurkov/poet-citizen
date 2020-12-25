import React from 'react';
import styled from 'styled-components/macro';
import config from '../config';
import { FooterLink } from './Texts';
import { Telegram, Instagram, Twitter, Vkontakte } from './icons/index';

const FooterSocNetBox = styled.div`
  width: 20%;
  display: grid;
  grid-template-rows: repeat(2, 28px);
  grid-template-columns: repeat(1, auto);
  grid-row-gap: 12px;
  padding: 0 4px;
  margin: 0;

  @media screen and (max-width: 440px) {
  }
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

const SocialIcon = styled.div`
  width: 28px;
  height: 28px;
`

const FooterSocialNet = () => {
  const { socialNetLinks } = config;

  return (
    <FooterSocNetBox>

        <FooterStyledLinksBar>
          <FooterSocNetLinksContainer>
            <SocialIcon as="a" target="_blank" href={socialNetLinks.telegram}>
              <Telegram fill="#fff" />
            </SocialIcon>
            <SocialIcon as="a" target="_blank" href={socialNetLinks.instagram}>
              <Instagram fill="#fff" />
            </SocialIcon>
            <SocialIcon as="a" target="_blank" href={socialNetLinks.twitter}>
              <Twitter fill="#fff" />
            </SocialIcon>
            <SocialIcon as="a" target="_blank" href={socialNetLinks.vkontakte}>
              <Vkontakte fill="#fff" />
            </SocialIcon>
          </FooterSocNetLinksContainer>
        </FooterStyledLinksBar>


        <FooterLink as="a" href="mailto:grazhdaninpoet@yandex.ru">grazhdaninpoet@yandex.ru</FooterLink>

    </FooterSocNetBox>
  );
};

FooterSocialNet.propTypes = {};

export default FooterSocialNet;
