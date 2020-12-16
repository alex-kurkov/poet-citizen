import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const StyledFormButton = styled.button`
  line-height: 1.2;
  font-family: Inter, Arial, sans-serif;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  text-align: center;
  border: 2px solid;
  border-radius: 2px;
  border-color: inherit;
  color: inherit;
  background: none;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  padding: 12px 12px;
  background-color: #DEDEDE;
  transition: background-color 0.3s ease-in-out;

  @media screen and (max-width: 1023px) {
  }
  @media screen and (max-width: 767px) {
  }
  @media screen and (max-width: 424px) {
  }
  ${(props) => (props.disabled === true
    ? `
  cursor: inherit;
  opacity: .4;
  `
    : '')}
  &:hover {
    font-style: ${(props) => (props.disabled
    ? 'normal' : 'italic')};
  }
`;

const LeadButton = ({ disabled = true, text }) => (
  <StyledFormButton
    className="form__btn"
    disabled={disabled}>
    {text}
  </StyledFormButton>
);

LeadButton.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
};
export default LeadButton;
