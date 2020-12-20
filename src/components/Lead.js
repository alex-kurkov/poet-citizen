import React from 'react';
import styled from 'styled-components/macro';
import Poem from './Poem';
import { LeadMainText, LeadText } from './Texts';
import { Link } from 'react-router-dom';
/* import PropTypes from 'prop-types'; */

const LeadSection = styled.section`
  width: 1440px;
  height: 636px;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #C4C4C4;
  padding: 105px 252px 75px 252px;
`;

const LeadBlock = styled.div`
  width: 936px;
  color: #000;
  height: 100%;
  font-size: 40px;
  font-weight: 900;
  display: flex;
  flex-direction: row;
  gap: 120px;
`;
const LeadInfoDiv = styled.div`
  width: 648px;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #C4C4C4;
  padding: 84px 0;
  display: flex;
  flex-direction: column;
  gap: 36px;

`;

const LeadButton = styled.button`
  width: 360px;
  height: 68px;
  text-decoration: none;
  align-self: center;
  line-height: 1.2;
  font-family: Open Sans, Arial, sans-serif;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  text-align: center;
  border-radius: 2px;
  color: #000;
  margin-top: 12px;
  background: none;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  padding: 12px 12px;
  background-color: #DEDEDE;
  transition: background-color 0.3s ease-in-out;

  @media screen and (max-width: 1023px) {
  }
  @media screen and (max-width: 767px) {
  }
  @media screen and (max-width: 440px) {
  }
  &:hover {
    opacity: .4;
  }
`;

const Lead = ({ texts }) => {
  const { rhyme, info, title } = texts;
  return (
    <LeadSection>
      <LeadBlock>
        <Poem poem={rhyme}/>
        <LeadInfoDiv>
          <LeadMainText>{title}</LeadMainText>
            <LeadText>{info}</LeadText>
          <LeadButton as={Link} to="/call">Предложить</LeadButton>
        </LeadInfoDiv>
      </LeadBlock>
    </LeadSection>
  )
}

Lead.propTypes = {
};

export default Lead;
