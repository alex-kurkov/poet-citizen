import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledForm = styled.form`
  margin: 0 auto;
  display: block;
`;
const StyledFieldset = styled.fieldset`
  color: #000;
  border: none;
  margin: 0 0 54px 0;
  text-align: left;
`;
const StyledLegend = styled.legend`
  font-family: Open Sans;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  text-align: center;
  color: #000;
  margin: 0 0 54px 0;
  text-align: left;
`;
const SubmitBtn = styled.button`
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  line-height: 1.33;
  border-radius: 2px;
  font-family: Inter, Arial, sans-serif;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  text-align: center;
  border: none;
  line-height: 1.2;
  background-color: #000;
  color: #fff;
  padding: 0;
  transition: opacity .3s ease-in-out;

  &:hover {
    opacity: .65;
  }
  ${({ disabled }) => disabled && 
  `
  cursor: inherit;
  opacity: .2;
  &:hover {
    opacity: .2;
  }
  `}
`

const Form = ({
  onSubmit, title, formButtonText, anyInputInvalid, children,
}) => (
  <StyledForm onSubmit={onSubmit}>

    <StyledFieldset>
      <StyledLegend>{title}</StyledLegend>
      {children}
    </StyledFieldset>

    <div>
      <SubmitBtn disabled={anyInputInvalid}>
        {formButtonText}
      </SubmitBtn>
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
