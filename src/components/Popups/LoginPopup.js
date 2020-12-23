import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PopupWithForm from './PopupWithForm';
import validate from '../../utils/validation';
import {
  StyledLabel,
  StyledInput,
  ErrorIndicator,
  ErrorMessage,
} from '../Forms/FormStyledElements';

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
      formButtonText="Войти"
      >
        <StyledLabel>
          E-mail
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
          Пароль
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
  handleLogin: PropTypes.func.isRequired,
  setHeaderAuthStatus: PropTypes.func,
  isOpen: PropTypes.bool,
  handleAuthLinkClick: PropTypes.func,
};
export default Login;
