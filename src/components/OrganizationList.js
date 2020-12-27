import React from 'react';
import styled from 'styled-components/macro';
import cardBg from '../img/organization_bg.png';
import { OrganizationItem, OrganizationInfo } from './Texts';

const OrganizationContainer = styled.ul`
  display: grid;
  margin: 36px auto 0;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  column-gap: 24px;
  grid-template-rows: 204px 204px;
  row-gap: 36px;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding: 0;
`;

const OrganizationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  padding: 16px;
  margin-right: 0;
  line-height: 18px;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
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
  &:hover:before {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
  &:after {
    content: '${({ labelText }) => labelText}';
    font-family: Open Sans, Lato, sans-serif;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.38; 
    color: #212228;
    display: inline-block;
    position: absolute;
    left: 24px;
    top: 66px;
    z-index: 10;
    opacity: 1;
  }
  &:hover:after {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
`;

const StyledLi = styled.li`
  width: 96%;
  height: 96%;
  position: relative;
  &:hover:nth-child(1) {
    ${OrganizationBox} {
      transform-origin: bottom right;
    }
  }
  &:hover:nth-child(2) {
    ${OrganizationBox} {
      transform-origin: bottom center;
    }
  }
  &:hover:nth-child(3) {
    ${OrganizationBox} {
      transform-origin: bottom center;
    }
  }
  &:hover:nth-child(4) {
    ${OrganizationBox} {
      transform-origin: bottom left;
    }
  }
  &:hover:nth-child(5) {
    ${OrganizationBox} {
      transform-origin: top right;
    }
  }
  &:hover:nth-child(6) {
    ${OrganizationBox} {
      transform-origin: center top;
    }
  }
  &:hover:nth-child(7) {
    ${OrganizationBox} {
      transform-origin: center top;
    }
  }
  &:hover:nth-child(8) {
    ${OrganizationBox} {
      transform-origin: top left;
    }
  }
`;

const OrganizationList = ({ array }) => (
  <OrganizationContainer>
    {array.map((item, i) => (
      <StyledLi key={i + item.id}>
        <OrganizationBox bg={item.image || cardBg} labelText={item.name}>
          <OrganizationItem>{item.name}</OrganizationItem>
          <OrganizationInfo>{item.info}</OrganizationInfo>
          </OrganizationBox>
      </StyledLi>
    ))}
  </OrganizationContainer>
);

export default OrganizationList;
