import React from 'react';
import styled from 'styled-components/macro';
// eslint-disable-next-line
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledForm = styled.form`
  margin: 0 auto;
  display: block;
`;
const StyledFieldset = styled.fieldset`
  color: #000;
  border: none;
  margin: 0 0 48px 0;
  text-align: left;
`;
const StyledLegend = styled.legend`
  font-family: Open Sans;
  font-weight: normal;
  font-size: 28px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  text-align: center;
  color: #000;
  margin: 0 auto 24px;
  text-align: left;
`;
const SubmitBtn = styled.button`
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  line-height: 1.33;
  border-radius: 2px;
  font-family: Roboto, Arial, sans-serif;
  font-weight: normal;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  text-align: center;
  border: none;
  line-height: 1.2;
  background-color: #c4c4c4;
  color: #000000;
  padding: 0;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.65;
  }
  ${({ disabled }) =>
    disabled &&
    `
  cursor: inherit;
  opacity: .2;
  &:hover {
    opacity: .2;
  }
  `}
`;

const Form = ({
  onSubmit,
  title,
  formButtonText,
  anyInputInvalid,
  children,
}) => (
  <StyledForm onSubmit={onSubmit}>
    <StyledFieldset>
      <StyledLegend>{title}</StyledLegend>
      {children}
    </StyledFieldset>

    <div>
      <SubmitBtn disabled={anyInputInvalid}>{formButtonText}</SubmitBtn>
    </div>
  </StyledForm>
);

Form.propTypes = {
  title: PropTypes.string,
  authStatus: PropTypes.object,
  formButtonText: PropTypes.string,
  anyInputInvalid: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node,
};
export default Form;
