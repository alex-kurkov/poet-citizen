import React from 'react';
import styled from 'styled-components/macro';
import {
  LeadMainText, LeadText, LeadHelper, LeadNavigation, PoemText,
} from './Texts';
import IcQuote from './IcQuote';
/* import PropTypes from 'prop-types'; */

const LeadSection = styled.section`
  background: #212228;
  height: 472px;
  width: 100%;
  background: url(${({leadBG}) => leadBG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const LeadWrap = styled.div`
  width: 1440px;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 60px 24px;
`;

const LeadBlock = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  color: #000;
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 24px 456px;
  grid-template-rows: 24px 160px 1fr;
  grid-template-areas: 
      'nav . helper'
      'title . poem'
      'info . poem'
`;
const InitPoemWrapper = styled.div`
  position: relative;
  grid-area: poem;
  width: 100%;
  height: 100%;
  background-color: rgba(242, 242, 242, .25);
  padding: 12px;
  box-sizing: border-box;
  `;
  const InitPoem = styled.div`
  padding: 4px 20px;
  height: 100%;
  box-sizing: border-box;
  background: none;
  font-family: Noto serif, serif;
  font-size: 20px;
  font-weight: 400;
  overflow-y: scroll;
  overflow-x: hidden;
  white-space: pre;

  &::-webkit-scrollbar {
    width: 4px;
    border: 1px solid #000;
    border-radius: 2px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    height: 35px;
    background-color: #43D3B2;
    border-radius: 2px;
  }
`;
const IcQuotesWrap = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0px;
  left: -36px;
  border-radius: 50%;
  background: none;
`;

const InitLead = ({ leadTexts, poem, leadPoemBlockVisibility, background }) => {
  const {
    leadTitle,
    leadHelperText,
    leadInfoText,
    leadNav,
  } = leadTexts;

  return (
    <LeadSection leadBG={background}>
      <LeadWrap>
        <LeadBlock>
          <LeadNavigation>{leadNav}</LeadNavigation>
          <LeadMainText>{leadTitle}</LeadMainText>
          <LeadText>{leadInfoText}</LeadText>
          <LeadHelper>{leadHelperText}</LeadHelper>
          {leadPoemBlockVisibility && <InitPoemWrapper>
            <IcQuotesWrap>
              <IcQuote fill="#FF7A00"/>
            </IcQuotesWrap>
            <InitPoem>
              <PoemText>
                {poem}
              </PoemText>
            </InitPoem>
          </InitPoemWrapper>}
        </LeadBlock>
      </LeadWrap>
    </LeadSection>
  );
};

InitLead.propTypes = {
};

export default InitLead;
