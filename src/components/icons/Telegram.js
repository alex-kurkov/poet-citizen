import React from 'react';
import styled  from 'styled-components/macro';

const StyledSvg = styled.svg`
  &:hover {
    transform: scale(1.2);
    transition: transform .3s ease-in-out;
  }
  &:hover .path {
    fill: #43D3B2;
    transition: fill .3s ease-in-out;
  }
`;

const Telegram = ({ fill }) => (
    <StyledSvg width="100%" height="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="path" fill={fill} d="M24.1091 4.33653L3.42411 12.313C2.01245 12.88 2.02061 13.6675 3.16511 14.0187L8.47578 15.6754L20.7631 7.92287C21.3441 7.56937 21.8749 7.75953 21.4386 8.14687L11.4834 17.1314H11.4811L11.4834 17.1325L11.1171 22.6065C11.6538 22.6065 11.8906 22.3604 12.1916 22.0699L14.7711 19.5615L20.1366 23.5247C21.1259 24.0695 21.8364 23.7895 22.0826 22.6089L25.6048 6.00953C25.9653 4.56403 25.0529 3.90953 24.1091 4.33653Z" />
    </StyledSvg>
);

export default Telegram;
