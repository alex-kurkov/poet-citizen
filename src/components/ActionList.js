import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import cardBg from '../img/organization_bg.png';

const ActionContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  grid-template-rows: 340px;
  margin-top: 36px;
  column-gap: 24px;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 0;
`;

const ActionItem = styled.p`
 display: block;
  color: #fff;
  width: 100%;
  height: min-content;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  margin: 0 20px;
`;

const ActionBox = styled.button`
  display: block;
  box-sizing: border-box;
  position: relative;
  text-align: inherit;
  margin-right: 0;
  line-height: 18px;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background: #eee;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${({ bg }) => `
  background: url(${bg});
  `}

  &:hover {
   transform: scale(1.2);
   transition: transform 0.3s ease-out;
  }

  &:before {
    content: '';
    width: 90%;
    height: 90%;
    display: inline-block;
    position: absolute;
    left: 5%;
    bottom: 5%;
    z-index: 5;
    background: #f2f2f2;
    opacity: 1;
    border-radius: 2px;
  }

    &:after {
    content: '${({ labelText }) => labelText}';
    margin:0;
    font-family: Open Sans;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.36; 
    color: #212228;
    display: inline-block;
    position: absolute;
    left: 32px;
    top: 108px;
    z-index: 10;
    opacity: 1;
  }

  &:hover:after {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }

  &:hover:before {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
`;

const StyledLi = styled.li`
  width: 96%;
  height: 96%;
  position: relative;
  &:hover:nth-child(1) {
    ${ActionBox} {
      transform-origin: bottom right;
    }
  }
  &:hover:nth-child(2) {
    ${ActionBox} {
      transform-origin: bottom center;
    }
  }
  &:hover:nth-child(3) {
    ${ActionBox} {
      transform-origin: bottom left;
    }
  }
  `;
const ActionList = ({ array }) => {
  const history = useHistory();

  return (
  <ActionContainer>

    { array.map((item, i) => (
      <StyledLi key={i + item.id}>
          <ActionBox
          onClick={() => {
            history.push(item.link);
          }}
          type='button'
          bg={item.image || cardBg}
          labelText={item.title.join(' \r\n')}>

          <ActionItem>{item.title.join(' ')}</ActionItem>
          </ActionBox>
        </StyledLi>
    ))
    }
  </ActionContainer>
  );
};

export default ActionList;
