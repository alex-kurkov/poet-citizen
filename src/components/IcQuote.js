import React from 'react';
/* import styled from 'styled-components/macro'; */
import PropTypes from 'prop-types';

const IcQuote = ({ fill }) => (
      <svg
        viewBox="0 0 50 50"
        fill="none"
        width="100%"
        height="100%"
        clipRule="evenodd"
        fillRule="evenodd"
        xmlns="http://www.w3.org/2000/svg">
        <path fill={fill} fillRule="nonzero" d="M6.93 39.07c-2.56,-2.72 -3.93,-5.77 -3.93,-10.71 0,-8.69 6.1,-16.48 14.98,-20.34l2.22 3.43c-8.29,4.48 -9.91,10.29 -10.55,13.96 1.33,-0.69 3.08,-0.93 4.79,-0.77 4.48,0.41 8.01,4.09 8.01,8.66 0,2.31 -0.91,4.52 -2.54,6.15 -1.63,1.63 -3.85,2.55 -6.15,2.55 -1.28,-0.01 -2.54,-0.28 -3.71,-0.78 -1.17,-0.5 -2.23,-1.23 -3.12,-2.15zm24.85 0c-2.56,-2.72 -3.94,-5.77 -3.94,-10.71 0,-8.69 6.11,-16.48 14.98,-20.34l2.22 3.43c-8.28,4.48 -9.9,10.29 -10.55,13.96 1.33,-0.69 3.08,-0.93 4.79,-0.77 4.48,0.41 8.02,4.09 8.02,8.66 0,2.31 -0.92,4.52 -2.55,6.15 -1.63,1.63 -3.84,2.55 -6.15,2.55 -1.27,-0.01 -2.53,-0.28 -3.71,-0.78 -1.17,-0.5 -2.23,-1.23 -3.11,-2.15z"/>
      </svg>
);

IcQuote.propTypes = {
  fill: PropTypes.string,
};

export default IcQuote;
