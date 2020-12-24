import React from 'react';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import Poem from './Poem';
import config from '../config';
import { LeadMainText, LeadText, OrangeSpan } from './Texts';

/* import PropTypes from 'prop-types'; */

const LeadBlock = styled.div`
  width: 100%;
  color: #000;
  height: 100%;
  font-size: 40px;
  font-weight: 900;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
`;
const LeadInfoDiv = styled.div`
  width: 60%;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  background: none;
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
  font-family: Open Sans, sans-serif;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  text-align: center;
  border-radius: 2px;
  border: none;
  color: #000;
  margin-top: 12px;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;
  padding: 8px 12px;
  background-color: #FF7A00;
  box-shadow: 0px 0px 10px rgba(242, 242, 242, .3);

  @media screen and (max-width: 1023px) {
  }
  @media screen and (max-width: 767px) {
  }
  @media screen and (max-width: 440px) {
  }
  &:hover {
    box-shadow: 2px 2px 20px rgba(242, 242, 242, .5);
    color: #f2f2f2;
    transition: all .3s ease;
  }
`;

const Slide = ({ currentSlide }) => {
  const history = useHistory();
  const { sliders } = config;
  const slide = sliders[currentSlide];
  const { rhyme, info, title, route, btnText } = slide;

  return (
        <LeadBlock>
          <Poem poem={rhyme}/>
          <LeadInfoDiv>
            <LeadMainText color="#F2F2F2">{title}</LeadMainText>
            <LeadText>{info}</LeadText>
            <LeadButton onClick={() => history.push(route)}>
              {btnText}
            </LeadButton>
          </LeadInfoDiv>
        </LeadBlock>
  );
};

Slide.propTypes = {
};

export default Slide;