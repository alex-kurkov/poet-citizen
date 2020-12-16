import React from 'react';
import styled from 'styled-components/macro';
import { LeadMainText, LeadText } from './Texts';
import { Link } from 'react-router-dom';
/* import PropTypes from 'prop-types'; */

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
  font-family: Inter, Arial, sans-serif;
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

const LeadInfo = ({ leadMainText, leadText }) => (
  <LeadInfoDiv>
    <LeadMainText>{leadMainText}</LeadMainText>
    <LeadText>{leadText}</LeadText>
    <LeadButton as={Link} to="/call">Предложить</LeadButton>
  </LeadInfoDiv>
)

LeadInfo.propTypes = {
};

export default LeadInfo;
