/* import React from 'react'; */
import styled from 'styled-components/macro';
import config from '../config';

const Paragraph = styled.p`
  font-family: ${config.tipography.fontFamily};
  font-style: normal;
  line-height: 1.5;
  font-weight: 400;
  padding: 0;
  margin: 0;
  display: block;
  margin-block-start: 0;
  margin-block-end: 0;
`;
const LeadMainText = styled(Paragraph)`
  grid-area: title;
  align-self: end;
  font-size: 36px;
  color: ${(props=>props.color)};
`;
const PoemText = styled(Paragraph)`
  font-size: 18px;
  line-height: 1.6;
  white-space: pre;
`
const LeadText = styled(Paragraph)`
  grid-area: info;
  font-size: 18px;
  color: #000;
`;
const LeadHelper = styled(Paragraph)`
  grid-area: helper;
  font-size: 16px;
  color: #000;
`
const LeadNavigation = styled(Paragraph)`
  grid-area: nav;
  font-size: 18px;
  color: #000;
`

export {
  LeadMainText,
  LeadText,
  PoemText,
  LeadHelper,
  LeadNavigation,
};