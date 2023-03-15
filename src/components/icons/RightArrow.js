import React from 'react';
import styled, { keyframes } from 'styled-components/macro';

const motion = keyframes`
  from {
  }

  to {
    transform: translateX(10px);
  }
`;
const StyledSvg = styled.svg`
  &:hover {
    animation: ${motion} .5s ease-out alternate infinite;
  }
  &:hover path {
    stroke: #FF7A00;
  }
`;

const RightArrow = ({ fill }) => (
    <StyledSvg width="100%" height="100%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2L37 25L14 48" stroke={fill} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </StyledSvg>
);

export default RightArrow;
