import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const StyledOverlay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, .8);
  transition: all 0.3s ease;
  z-index: 100;

  ${({isOpen}) => isOpen
  ? `
    visibility: visible;
    opacity: 1;
    `
  : `
    visibility: hidden;
    opacity: 0;
    `
  }
`;

const Overlay = ({ isOpen, onClick, children }) => {
  const overlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  return (
    <StyledOverlay onClick={(e)=> overlayClick(e)} isOpen={isOpen}>{children}</StyledOverlay>
  );
};

Overlay.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.object,
  onClick: PropTypes.func,
};

export default Overlay;
