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

const Register = ({ handleRegister, isOpen, onClose, handleAuthLinkClick, authStatus }) => {
  const [errors, setErrors] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });
  const [values, setValues] = useState({
    name: '',
    surname: '',
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
    handleRegister(values);
  };

  return (
    <PopupWithForm
      title="Регистрация"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleFormSubmit}
      anyInputInvalid={anyInputInvalid}
      authStatus={authStatus}
      handleAuthLinkClick={handleAuthLinkClick}
      formButtonText="Зарегистрироваться"
      >
        <StyledLabel>
          Имя
          <StyledInput
            error={!!errors.name}
            value={values.name}
            type="text"
            name="name"
            onChange={handleInputChange}
            onFocus={() => setShowError({ name: true })}
            onBlur={() => setShowError({})}
            placeholder="Введите новое имя"
            noValidate />
          {errors.name && <ErrorIndicator/>}
        </StyledLabel>

        <StyledLabel>
          Фамилия
          <StyledInput
            error={!!errors.surname}
            value={values.surname}
            type="text"
            name="surname"
            onChange={handleInputChange}
            onFocus={() => setShowError({ surname: true })}
            onBlur={() => setShowError({})}
            placeholder="Фамилия"
            noValidate />
          {errors.surname && <ErrorIndicator/>}
        </StyledLabel>

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
        </StyledLabel>

        {errors.name && showError.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        {errors.email && showError.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        {errors.surname && showError.surname && <ErrorMessage>{errors.surname}</ErrorMessage>}
        {errors.password && showError.password && <ErrorMessage>{errors.password}</ErrorMessage>}

      </PopupWithForm>
  );
};

Register.propTypes = {
  handleRegister: PropTypes.func.isRequired,
  setHeaderAuthStatus: PropTypes.func,
};
export default Register;
