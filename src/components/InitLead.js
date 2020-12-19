import React from 'react';
import styled from 'styled-components/macro';
import { LeadMainText, LeadText, LeadHelper,LeadNavigation, PoemText } from './Texts';
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
      'nav . helper'
      'title . poem'
      'info . poem'
`
const InitPoemWrapper = styled.div`
  grid-area: poem;
  width: 100%;
  height: 100%;
  background-color: #b5b5b5;
  padding: 8px;
  box-sizing: border-box;
`;
const InitPoem = styled.div`
  height: 100%;
  box-sizing: border-box;
  background: none;
  overflow-y: scroll;
  white-space: pre;
  &::-webkit-scrollbar {
    width: 4px;
    background-color: rgba(255, 255, 255, .3);
  }
  &::-webkit-scrollbar-thumb {
    height: 35px;
    background-color: rgba(255, 255, 255, .8);
    border-radius: 1px;
  }
`;

const InitLead = ( { leadTexts, poem, leadPoemBlockVisibility } ) => {
  const { 
    leadTitle,
    leadHelperText, 
    leadInfoText, 
    leadNav
  } = leadTexts;

  return (
    <InitLeadSection>
      <LeadBlock>
        <LeadNavigation>{leadNav}</LeadNavigation>
        <LeadMainText>{leadTitle}</LeadMainText>
        <LeadText>{leadInfoText}</LeadText>
        <LeadHelper>{leadHelperText}</LeadHelper>
        {leadPoemBlockVisibility && <InitPoemWrapper>
          <InitPoem>
            <PoemText>
              {poem}
            </PoemText>
          </InitPoem>
        </InitPoemWrapper>}
      </LeadBlock>
    </InitLeadSection>
  )
};

InitLead.propTypes = {
};

export default InitLead;
