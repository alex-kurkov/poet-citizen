import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import PopupWithForm from './PopupWithForm';
import validate from '../../utils/validation';

const StyledLabel = styled.label`
  position: relative;
`
const StyledInput = styled.input`
  box-sizing: border-box;
  cursor: text;
  width: 100%;
  height: 28px;
  background: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 0 2px 4px 2px;
  font-family: Inter, Arial, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  margin: 24px 0 12px 0;
  border-bottom: 1px solid #000;

  ${({ error }) => error &&
   'color: red;'
  }
`

const ErrorIndicator = styled.div`
  position: absolute;
  top: 4px;
  left: -12px;
  color: #f00;

  &::before {
    content: '*';
  }
`;
const ErrorMessage = styled.span`
  width: 100%;
  height: fit-content;
  font-family: Open Sans;
  font-weight: 400;
  font-size: 14px;
  color: #f00;
  margin-bottom: 12px
`;

const Login = ({ handleLogin, isOpen, onClose, handleAuthLinkClick, authStatus }) => {
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [anyInputInvalid, setAnyInputInvalid] = useState(true);
  const [showError, setShowError] = useState({});

  const checkFormValidity = () => {
    const any = Object
      .values(errors)
      .some((i) => i !== false);
    setAnyInputInvalid(any);
  };

  useEffect(() => {
    setErrors(validate(values, errors));
  }, [values]);

  useEffect(() => {
    checkFormValidity();
  }, [errors]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin(values);
  };

  return (
    <PopupWithForm
      title="Вход"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleFormSubmit}
      anyInputInvalid={anyInputInvalid}
      authStatus={authStatus}
      handleAuthLinkClick={handleAuthLinkClick}
      >
        <StyledLabel>
          <StyledInput
            error={!!errors.email}
            value={values.email}
            onChange={handleInputChange}
            onFocus={() => setShowError({ email: true })}
            onBlur={() => setShowError({})}
            type="email"
            placeholder="Почта"
            name="email"
            noValidate />
          {errors.email && <ErrorIndicator/>}
          {errors.email && showError.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </StyledLabel>
        <StyledLabel>
          <StyledInput
            value={values.password}
            onChange={handleInputChange}
            onFocus={() => setShowError({ password: true })}
            onBlur={() => setShowError({})}
            type="password"
            name="password"
            placeholder="Пароль"
            noValidate />
          {errors.password && <ErrorIndicator/>}
          {errors.password && showError.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </StyledLabel>
      </PopupWithForm>
  );
};

Login.propTypes = {
  handleRegister: PropTypes.func.isRequired,
  setHeaderAuthStatus: PropTypes.func,
};
export default Login;
