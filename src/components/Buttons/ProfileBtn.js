import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Path = styled.path`
  ${({loggedIn}) => loggedIn
    ?`
      fill: #212228;
    `
    :`
      fill: #f2f2f2;
    `}
`;
const ProfileBtnWrap = styled.div`
  min-width: 240px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
const ProfileButton = styled.div`
  box-sizing: content-box;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  text-align: center;
  height: 38px;
  border-radius: 40px;
  align-self: center;
  padding: 0;
  ${({loggedIn}) => loggedIn
    ?`
      background: #f2f2f2;
      `
    :`
      background: #212228;
    `}

  &&:hover .path {
      fill: #FF7A00;
  }
  

`;

const ProfileBtn = ({ onClick, loggedIn }) => (
  <ProfileBtnWrap>
    <ProfileButton loggedIn={loggedIn} onClick={onClick}>
      <svg width="100%" height="100%" viewBox="-4 -4 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
          className="path"
          loggedIn={loggedIn}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 25c0,-6.63 2.64,-12.99 7.32,-17.68 4.69,-4.68 11.04,-7.32 17.68,-7.32 6.64,0 12.99,2.64 17.68,7.32 4.68,4.69 7.32,11.05 7.32,17.68 0,6.64 -2.64,12.99 -7.32,17.68 -4.69,4.69 -11.04,7.32 -17.68,7.32 -6.64,0 -12.99,-2.63 -17.68,-7.32 -4.68,-4.69 -7.32,-11.04 -7.32,-17.68zm25 -21.27c-4.1,0 -8.11,1.19 -11.56,3.42 -3.45,2.22 -6.17,5.4 -7.85,9.15 -1.67,3.74 -2.24,7.9 -1.61,11.95 0.62,4.05 2.41,7.84 5.14,10.91 1.81,-2.53 4.18,-4.6 6.95,-6.01 2.76,-1.43 5.83,-2.17 8.93,-2.17 6.55,0 12.34,3.23 15.89,8.18 2.72,-3.07 4.51,-6.86 5.13,-10.91 0.63,-4.05 0.06,-8.21 -1.61,-11.95 -1.68,-3.75 -4.4,-6.92 -7.85,-9.15 -3.45,-2.23 -7.46,-3.42 -11.56,-3.42l0 0 0 0zm13.14 38c-1.44,-2.16 -3.4,-3.93 -5.69,-5.16 -2.29,-1.23 -4.86,-1.86 -7.45,-1.86 -2.59,0 -5.16,0.65 -7.45,1.86 -2.29,1.23 -4.25,3 -5.69,5.17 3.74,2.95 8.38,4.54 13.14,4.54 4.76,0 9.4,-1.59 13.14,-4.54l0 -0.01zm-22.36 -20.64c0,-2.43 0.97,-4.79 2.7,-6.52 1.73,-1.72 4.07,-2.69 6.52,-2.69 2.45,0 4.79,0.97 6.52,2.69 1.73,1.73 2.7,4.09 2.7,6.52 0,2.45 -0.97,4.8 -2.7,6.53 -1.73,1.72 -4.07,2.69 -6.52,2.69 -2.45,0 -4.79,-0.97 -6.52,-2.69 -1.73,-1.73 -2.7,-4.08 -2.7,-6.53zm9.22 -5.48c-0.72,0 -1.44,0.14 -2.1,0.41 -0.67,0.28 -1.28,0.69 -1.79,1.19 -0.51,0.51 -0.91,1.12 -1.18,1.78 -0.28,0.68 -0.42,1.39 -0.42,2.1 0,0.73 0.14,1.44 0.42,2.11 0.27,0.66 0.67,1.27 1.18,1.78 0.51,0.51 1.12,0.92 1.79,1.19 0.66,0.28 1.38,0.41 2.1,0.41 1.46,0 2.85,-0.57 3.89,-1.6 1.03,-1.03 1.6,-2.43 1.6,-3.89 0,-1.45 -0.57,-2.85 -1.6,-3.88 -1.04,-1.02 -2.43,-1.61 -3.89,-1.61l0 0z"
       />
      </svg>
    </ProfileButton>
  </ProfileBtnWrap>
);

ProfileBtn.ProfileBtn = {
  onClick: PropTypes.func,
  loggedIn: PropTypes.bool,
};

export default ProfileBtn;
