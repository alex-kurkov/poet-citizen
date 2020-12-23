/* import React from 'react'; */
import styled from 'styled-components/macro';

const Paragraph = styled.p`
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
`;
const LeadMainText = styled(ParagraphOpenSans)`
  grid-area: title;
  align-self: end;
  line-height: 1.2;
  font-size: 36px;
  color: ${((props) => props.color)};
`;
const PoemText = styled(ParagraphNoto)`
  font-size: 18px;
  line-height: 1.6;
  white-space: pre;
`;
const LeadText = styled(ParagraphNoto)`
  grid-area: info;
  font-size: 18px;
  color: #000;
`;
const LeadHelper = styled(ParagraphNoto)`
  grid-area: helper;
  font-size: 18px;
  color: #000;
`;
const LeadNavigation = styled(ParagraphNoto)`
  grid-area: nav;
  font-size: 18px;
  color: #000;
`;

const IntroGoal = styled(ParagraphNoto)`
  font-weight: 600;
  font-size: 20px;
  line-height: 34px;
  margin: 0 auto;
`;
const IntroBrief = styled(ParagraphOpenSans)`
  font-weight: 600;
  font-size: 36px;
  line-height: 52px;
  margin-top: 0;
  margit-bottom: 0;
`;

const ActiveTitle = styled(ParagraphOpenSans)`
  margin: 88px 0 36px;
  font-weight: normal;
  font-size: 28px;
  line-height: 45px;
`;
const IntroParagraf = styled(ParagraphOpenSans)`
  font-weight: normal;
  font-size: 20px;
  line-height: 36px;
  margin-top: 0;
  margin-bottom: 20px;
  width: 90%;

  tab-size: 12px;
`;

const IntroGoalDiv = styled(ParagraphOpenSans)`
  font-weight: bold;
  font-size: 20px;
  line-height: 34px;
  width: 75%;
  display: flex;
  position: relative;
  margin-top: 32px;
  background: #eee;
  padding: 12px 80px;
  box-sizing: border-box;
`;
const IntroTitleDiv = styled.p`
  max-width: 648px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 52px;
  margin-top: 108px;
  margin-bottom: 36px;
 `;
 const IntroParticipationText = styled(ParagraphOpenSans)`
 font-family: Georgia;
 font-style: normal;
 font-weight: normal;
 font-size: 20px;
 line-height: 24px;
 margin-top: 44px;
 margin-bottom: 0;
`;

const AuthMsg = styled(ParagraphOpenSans)`
  font-size: 14px;
  margin: 16px auto 0 auto;
  padding: 0;
  color: #000;
  width: 100%;
`
const AuthMsgLink = styled(ParagraphOpenSans)`
  color: #000;
  cursor: pointer;
  text-decoration: none;
  padding-left: 8px;
  font-family: Inter, Arial, sans-serif;
  font-weight: 400;
  font-size: 14px;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: rgba(0, 0, 0, .6);
  }
`
const FooterLink = styled(ParagraphOpenSans)`
  font-size: 16px;
  line-height: 1.38;
  color: #000;
  border: none;
  box-sizing: border-box;
  text-decoration: none;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 440px) {
  }
`;

const FooterExtLink = styled.a`
color: #000;
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
`;


const FooterText = styled(ParagraphOpenSans)`
  font-size: 16px;
  line-height: 1.38;
  color: #000;
  margin-top: 0;
  margin-bottom: 0;
`;

export {
  LeadMainText,
  LeadText,
  PoemText,
  LeadHelper,
  LeadNavigation,
  NavBarLink,
  IntroGoal,
  ActiveTitle,
  IntroBrief,
  IntroParagraf,
  IntroGoalDiv,
  IntroTitleDiv,
  IntroParticipationText,
  AuthMsg,
  AuthMsgLink,
  FooterLink,
  FooterText,
  FooterExtLink,
};
