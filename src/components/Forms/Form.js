import React from 'react';
/* import { Link } from 'react-router-dom'; */
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledFieldset,
  StyledLegend,
} from './FormStyledElements';

const Form = ({
  onSubmit, title, children,
}) => (
  <StyledForm onSubmit={onSubmit}>

    <StyledFieldset>
      <StyledLegend>{title}</StyledLegend>
      {children}
    </StyledFieldset>
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
