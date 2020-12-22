import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import PopupWithForm from './PopupWithForm';
import validate from '../../utils/validation';

const StyledLabel = styled.label`
  position: relative;
`;
const StyledInput = styled.input`
  box-sizing: border-box;
  cursor: text;
  width: 100%;
  height: 44px;
  background: #fbfbfb;
  padding: 0 2px 4px 2px;
  font-family: Open Sans, Arial, sans-serif;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.38;
  margin: 4px 24px 16px 24px;
  border: 1px solid #bcbaba;

  ${({ error }) => error && 'color: red;'}
`;

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
  margin-bottom: 12px;
`;

const Register = ({
  handleRegister,
  isOpen,
  onClose,
  handleAuthLinkClick,
  authStatus,
}) => {
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
    const any = Object.values(errors).some((i) => i !== false);
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
      title='Регистрация'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleFormSubmit}
      anyInputInvalid={anyInputInvalid}
      authStatus={authStatus}
      handleAuthLinkClick={handleAuthLinkClick}
      formButtonText='Зарегистрироваться'
    >
      <StyledLabel>
        <StyledInput
          error={!!errors.userName}
          value={values.userName}
          onChange={handleInputChange}
          onFocus={() => setShowError({ userName: true })}
          onBlur={() => setShowError({})}
          type='string'
          placeholder='Имя'
          name='userName'
          noValidate
        />
        {errors.userName && <ErrorIndicator />}
        {errors.userName && showError.userName && (
          <ErrorMessage>{errors.userName}</ErrorMessage>
        )}
      </StyledLabel>
      <StyledLabel>
        <StyledInput
          error={!!errors.userLastName}
          value={values.userLastName}
          onChange={handleInputChange}
          onFocus={() => setShowError({ userLastName: true })}
          onBlur={() => setShowError({})}
          type='string'
          placeholder='Фамилия'
          name='userLastName'
          noValidate
        />
        {errors.userLastName && <ErrorIndicator />}
        {errors.userLastName && showError.userLastName && (
          <ErrorMessage>{errors.userLastName}</ErrorMessage>
        )}
      </StyledLabel>

      <StyledLabel>
        <StyledInput
          error={!!errors.email}
          value={values.email}
          onChange={handleInputChange}
          onFocus={() => setShowError({ email: true })}
          onBlur={() => setShowError({})}
          type='email'
          placeholder='E-mail'
          name='email'
          noValidate
        />
        {errors.email && <ErrorIndicator />}
        {errors.email && showError.email && (
          <ErrorMessage>{errors.email}</ErrorMessage>
        )}
      </StyledLabel>
      <StyledLabel>
        <StyledInput
          value={values.password}
          onChange={handleInputChange}
          onFocus={() => setShowError({ password: true })}
          onBlur={() => setShowError({})}
          type='password'
          name='password'
          placeholder='Пароль'
          noValidate
        />
        {errors.password && <ErrorIndicator />}
        {errors.password && showError.password && (
          <ErrorMessage>{errors.password}</ErrorMessage>
        )}
      </StyledLabel>
    </PopupWithForm>
  );
};

Register.propTypes = {
  handleRegister: PropTypes.func.isRequired,
  setHeaderAuthStatus: PropTypes.func,
};
export default Register;
