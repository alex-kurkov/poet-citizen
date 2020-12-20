/* import React from 'react'; */
import styled from 'styled-components/macro';

const Paragraph =  styled.p`
font-style: normal;
line-height: 1.5;
font-weight: 400;
padding: 0;
margin: 0;
display: inline-block;
margin-block-start: 0;
margin-block-end: 0;
`;
const ParagraphOpenSans = styled(Paragraph)`
  font-family: Open Sans, Lato, sans-serif;
`;
const ParagraphNoto = styled(Paragraph)`
  font-family: 'Noto Serif', 'PT Serif', 'serif';
`;
const NavBarLink = styled(ParagraphOpenSans)`
  font-size: 18px;
  display: block;
  padding: 8px 20px;
  color: #000;
  line-height: 19px;
  border: none;
  box-sizing: border-box;
  text-decoration: none;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: .6;
  }
  @media screen and (max-width: 767px) {
  }
  
  @media screen and (max-width: 440px) {
  }
`
const LeadMainText = styled(ParagraphOpenSans)`
  grid-area: title;
  align-self: end;
  line-height: 1.2;
  font-size: 36px;
  color: ${(props=>props.color)};
`;
const PoemText = styled(ParagraphNoto)`
  font-size: 18px;
  line-height: 1.6;
  white-space: pre;
`
const LeadText = styled(ParagraphNoto)`
  grid-area: info;
  font-size: 18px;
  color: #000;
`;
const LeadHelper = styled(ParagraphNoto)`
  grid-area: helper;
  font-size: 18px;
  color: #000;
`
const LeadNavigation = styled(ParagraphNoto)`
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
  NavBarLink
};