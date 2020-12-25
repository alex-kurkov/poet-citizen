import React from 'react';
import styled from 'styled-components/macro';
import { FooterLink, FooterText } from './Texts';

const FooterBox = styled.ul`
  display: grid;
  width: 40%;
  grid-template-rows: repeat(2, 28px);
  grid-template-columns: repeat(1, auto);
  grid-row-gap: 12px;
  justify-items: self-end;
  padding: 0;
  margin: 0;
  padding-left: 8px;
  @media screen and (max-width: 440px) {
  }
`;

const FooterBoxLiItem = styled.li`
  list-style-type: none;
  margin: 0 0;
  padding: 0;
`;

const FooterTradeMark = () => {
  const today = new Date();
  const yearNow = today.getFullYear();

  return (
    <FooterBox>
      <FooterBoxLiItem>
      <FooterText>&copy; {yearNow}  “Гражданин поэт”</FooterText>
      </FooterBoxLiItem>
      <FooterBoxLiItem>
              <FooterLink as="a" href="https://praktikum.yandex.ru/profile/web/" target="_blank">Разработано студентами Яндекс.Практикума</FooterLink>
      </FooterBoxLiItem>
    </FooterBox>
  );
};

FooterTradeMark.propTypes = {};

export default FooterTradeMark;