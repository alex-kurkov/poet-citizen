import React from 'react';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { LeadMainText, LeadText, LeadNavigation } from './Texts';
/* import PropTypes from 'prop-types'; */

const InitLeadSection = styled.section`
  width: 1440px;
  height: 472px;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: #C4C4C4;
  padding: 32px 156px;
`;

const LeadBlock = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  color: #000;
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 48px 400px;
  grid-template-rows: 24px 160px 1fr;
  grid-template-areas: 
      'nav . action'
      'title . action'
      'info . action'
`;
const ActionBtn = styled.button`
  grid-area: action;
  align-self: center;
  justify-self: center;
  width: 332px;
  height: 332px;
  border-radius: 50%;
  font-family: 'Open Sans';
  font-weight: 500px;
  font-size: 24px;
  background: #fff;
  border: none;

  &:hover {
    opacity: .7;
    transition: opacity ease-in-out .3s;
  }
  &:focus {
    outline: none;
  }
`;

const InitLead = ({ leadTexts }) => {
  const {
    leadTitle,
    leadInfoText,
    leadNav,
  } = leadTexts;

  const history = useHistory();

  return (
    <InitLeadSection>
      <LeadBlock>
        <LeadNavigation>{leadNav}</LeadNavigation>
        <LeadMainText>{leadTitle}</LeadMainText>
        <LeadText>{leadInfoText}</LeadText>
        <ActionBtn
          type="button"
          onClick={() => history.push('/call')}>
        {'Предложи свою\nинициативу.\nСделай мир лучше'}
        </ActionBtn>
      </LeadBlock>
    </InitLeadSection>
  );
};

InitLead.propTypes = {
};

export default InitLead;
