import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const DislikeBtn = styled.button`
 border: 0;
 pointer-events: none;
`;

const DislikeButton = ({ onClick }) => (
  <DislikeBtn onClick={onClick}>
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0)'>
        <path
          d='M31.8438 18.9312C31.9375 18.1812 32 17.4187 32 16.6437C32 9.83125 28.2688 3.9 22.7438 0.756246L21.7125 2.93124L21.7125 17.7875L22.8563 18.9312L31.8438 18.9312ZM1.19878e-06 17.7875C1.0988e-06 18.9312 1.14375 20.075 2.2875 20.075L11.4313 20.075C10.8625 22.3625 10.2875 24.6437 10.2875 25.7875C10.2875 28.075 11.4312 30.3562 12 30.9312C12.0125 30.9437 12.5688 31.5 13.7125 31.5C15.425 31.5 15.425 29.7875 15.425 29.7875C15.425 29.7562 15.9938 26.9312 15.9938 25.7875C15.9938 24.6437 18.2813 20.075 19.425 18.9312L20.5688 18.3625L20.5688 2.36249L19.425 1.79375L6.85625 1.79374C4.56875 1.79374 3.425 2.93749 3.425 4.08124C3.425 5.22499 4.56875 6.36874 5.7125 6.36874C3.425 6.36874 2.28125 7.51249 2.28125 8.65625C2.28125 9.79999 3.425 10.9437 4.56875 10.9437C2.28125 10.9437 1.1375 12.0875 1.1375 13.2312C1.1375 14.375 2.28125 15.5187 3.425 15.5187C1.14375 15.5 1.29877e-06 16.6437 1.19878e-06 17.7875Z'
          fill='#212228'
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect
            x='32'
            y='32'
            width='32'
            height='32'
            rx='2'
            transform='rotate(-180 32 32)'
            fill='white'
          />
        </clipPath>
      </defs>
    </svg>
  </DislikeBtn>
);

DislikeButton.propTypes = {
  onClick: PropTypes.func,
};

export default DislikeButton;
