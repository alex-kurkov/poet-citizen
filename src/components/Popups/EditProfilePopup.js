import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import validate from '../../utils/validation';
import PopupWithForm from './PopupWithForm';
import {
  StyledLabel,
  StyledInput,
  ErrorIndicator,
  ErrorMessage,
} from '../Forms/FormStyledElements';


const EditProfilePopup = ({ currentUser, handleUserUpdate, isOpen, onClose, handleAuthLinkClick, authStatus }) => {

  const [errors, setErrors] = useState({
    name: '',
    surname: '',
  });
  const [values, setValues] = useState({});
  const [anyInputInvalid, setAnyInputInvalid] = useState(true);
  const [showError, setShowError] = useState({});

  const checkFormValidity = () => {
    const any = Object
      .values(errors)
      .some((i) => i !== false);
    setAnyInputInvalid(any);
  };

  useEffect(() => {
    setErrors(validate(values));
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
    handleUserUpdate(values);
  };

  return (
    <PopupWithForm
      title={`Редактировать профиль:\n${currentUser.name} ${currentUser.surname || ''}`}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleFormSubmit}
      anyInputInvalid={anyInputInvalid}
      authStatus={authStatus}
      handleAuthLinkClick={handleAuthLinkClick}
      formButtonText="Сохранить"
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
        {errors.name && showError.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        {errors.surname && showError.surname && <ErrorMessage>{errors.surname}</ErrorMessage>}
    </PopupWithForm>);
};

EditProfilePopup.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  handleUserUpdate: PropTypes.func.isRequired,
  handleAuthLinkClick: PropTypes.func,
  currentUser: PropTypes.object,
  authStatus: PropTypes.object,
};

export default EditProfilePopup;
