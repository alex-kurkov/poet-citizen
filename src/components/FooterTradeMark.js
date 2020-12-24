import React from 'react';
import styled from 'styled-components/macro';
import { FooterText } from './Texts';

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
  return (
    <FooterBox>
      <FooterBoxLiItem>
      <FooterText>&copy; 2020. “Гражданин поэт”</FooterText>
      </FooterBoxLiItem>
      <FooterBoxLiItem>
              <FooterText>Разработано студентами Яндекс.Практикума</FooterText>
      </FooterBoxLiItem>
    </FooterBox>
  );
};

FooterTradeMark.propTypes = {};

export default FooterTradeMark;