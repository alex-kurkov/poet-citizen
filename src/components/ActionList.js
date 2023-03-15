import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import cardBg from '../img/organization_bg.png';
import circleOrange from '../img/action/circle-orange.svg';

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
  color: #f2f2f2;
  box-sizing: border-box;
  max-width: 30%;
  height: min-content;
  font-family: Open Sans, Lato, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 1.36;
  margin: 0 20px;
  opacity: 0;
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
  ${({ bg }) => `
	  background: url(${bg});
	  `}
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    transition: transform 0.3s ease-out;
  }

  &:checked {
    box-shadow: 0 0 12px rgba(33, 34, 40, 0.5);
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
    opacity: 0.82;
    border-radius: 2px;
  }

  &:after {
    content: '${({ labelText }) => labelText}';
    margin: 0;
    box-sizing: border-box;
    max-width: 30%;
    font-family: Open Sans, Lato, sans-serif;
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
  &:hover #blurkid {
    backdrop-filter: blur(0);
    opacity: 0;
  }

  &:hover #circlekid {
    font-size: 36px;
    opacity: 1;
    transition: opacity 0.3s ease-out;
  }

  &:hover #itemtextkid {
    opacity: 1;
    transition: opacity 0.3s ease-out;
  }
`;

const ActionBoxBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  backdrop-filter: blur(4px);
  height: 100%;
  width: 100%;
  z-index: 2;
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

const ActionCircle = styled.div`
  width: 76px;
  height: 76px;
  background: url(${circleOrange});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  right: 52px;
  bottom: 36px;
  opacity: 0;

  &:before {
    content: '';
    width: 72px;
    height: 0;
    border-bottom: 1.5px solid #f2f2f2;
    position: absolute;
    left: 27px;
    top: 38px;
  }
  &:after {
    content: '';
    position: absolute;
    top: 34px;
    left: 87px;
    width: 10px;
    height: 10px;
    border-top: 1.5px solid #f2f2f2;
    border-right: 1.5px solid #f2f2f2;
    transform: rotate(45deg);
  }
`;

const ActionList = ({ array, crumbsMethods }) => {
  const history = useHistory();

  return (
    <ActionContainer>
      {array.map((item, i) => (
        <StyledLi key={i + item.id}>
          <ActionBox
            onClick={() => {
              crumbsMethods[item.link]();
              history.push(item.link);
            }}
            type='button'
            bg={item.image || cardBg}
            labelText={item.title.join(' ')}
          >
            <ActionBoxBlur id='blurkid'></ActionBoxBlur>
            <ActionItem id='itemtextkid'>{item.title.join(' ')}</ActionItem>
            <ActionCircle id='circlekid'></ActionCircle>
          </ActionBox>
        </StyledLi>
      ))}
    </ActionContainer>
  );
};

export default ActionList;
