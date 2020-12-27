import React from 'react';
import PropTypes, { array, object } from 'prop-types';
import styled from 'styled-components/macro';

const StyledModal = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 360px;
  background-color: #f2f2f2;
  border-radius: 2px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
  padding: 40px 24px 64px 24px;
  transition: visibility 0s, opacity .5s ease;
  z-index: 99;

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

const Modal = ({ isOpen, children }) => (
  <StyledModal isOpen={isOpen}>{children}</StyledModal>
);

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([array, object]),
};

export default Modal;
