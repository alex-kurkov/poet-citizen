import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes }  from 'styled-components/macro';

const motion = keyframes`
  from {}
  to {
    transform: translateY(-5px);
  }
`
const LikeBtn = styled.button`
  background: none;
  border: 0;
  pointer-events: cursor;

  &:hover {
    animation: ${motion} .5s ease-out alternate infinite;
  }
  &:focus {
    outline: none;
  }
`;

const LikeButton2 = ({ onClick, liked }) => (
  <LikeBtn onClick={onClick}>
    <svg
      width="32px"
      height="32px"
      fillRule="evenodd" 
      clipRule="evenodd"
      shapeRendering="geometricPrecision"
      viewBox='0 0 50 50'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill={liked ? '#00D27A' : '#F2F2F2'}
        fillRule="nonzero"
        d="M2.23 20.4c-0.14,1.1 -0.23,2.21 -0.23,3.35 0,9.97 5.46,18.65 13.55,23.25l1.51 -3.18 0 -21.75 -1.68 -1.67 -13.15 0zm46.61 1.67c0,-1.67 -1.67,-3.35 -3.35,-3.35l-13.38 0c0.83,-3.35 1.67,-6.68 1.67,-8.36 0,-3.35 -1.67,-6.69 -2.51,-7.53 -0.01,-0.02 -0.83,-0.83 -2.5,-0.83 -2.51,0 -2.51,2.51 -2.51,2.51 0,0.04 -0.83,4.18 -0.83,5.85 0,1.68 -3.35,8.36 -5.02,10.04l-1.68 0.83 0 23.42 1.68 0.83 18.39 0c3.35,0 5.03,-1.67 5.03,-3.35 0,-1.67 -1.68,-3.34 -3.35,-3.34 3.35,0 5.02,-1.68 5.02,-3.35 0,-1.68 -1.67,-3.35 -3.35,-3.35 3.35,0 5.02,-1.68 5.02,-3.35 0,-1.67 -1.67,-3.35 -3.34,-3.35 3.34,0.03 5.01,-1.64 5.01,-3.32z"
      />
    </svg>
  </LikeBtn>
);

LikeButton2.propTypes = {
  onClick: PropTypes.func,
};

export default LikeButton2;
