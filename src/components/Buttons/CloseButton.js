import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const StyledBtn = styled.button`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 16px;
  right: 16px;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 999;
  background: transparent;
  
  &:hover {
    opacity: .6;
    transition: opacity linear .2s;
  }

  &:focus {
    outline: thin;
  }

`;

const CloseButton = ({ onClick }) => (
  <StyledBtn onClick={onClick} title="Закрыть">
    <svg width="100%" height="100%" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M44.7661 41.5683L31.9759 28.778L44.7661 15.9878L41.5686 12.7902L28.7783 25.5805L15.9881 12.7902L12.7905 15.9878L25.5808 28.778L12.7905 41.5683L15.9881 44.7658L28.7783 31.9756L41.5686 44.7658L44.7661 41.5683Z" fill="#000"/>
    </svg>
  </StyledBtn>
);

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
