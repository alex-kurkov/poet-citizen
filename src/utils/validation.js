const regExpEmail = /([a-zA-Z0-9]([-_.]?[a-zA-Z0-9]+)*)@([a-zA-Z0-9]([-]?[a-zA-Z0-9]+)*)(\.([a-zA-Z])+)+/i;
const regExpPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{8,}$/;
const regExpUrl = /https*:\/\/[^ "]+$/i;

export default (values) => {
  const errors = {};

  const validateEmail = (value) => {
    if (regExpEmail.test(value)) {
      errors.email = false;
    } else if (!value) {
      errors.email = 'Обязательное поле';
    } else {
      errors.email = 'Введите корректный Email адрес';
    }
  };
  const validatePassword = (value) => {
    if (regExpPassword.test(value)) {
      errors.password = false;
    } else if (!value) {
      errors.password = 'Обязательное поле';
    } else {
      errors.password = 'Пароль должен содержать цифры и латинские буквы и быть не меньше 8 символов';
    }
  };
  const validateName = (value) => {
    if (value && (value.length > 1 && value.length < 31)) {
      errors.name = false;
    } else if (!value) {
      errors.name = 'Обязательное поле';
    } else {
      errors.name = 'Имя/Фамилия должно быть не меньше 2 и не больше 30 символов';
    }
  };
  const validateSurname = (value) => {
    if (value && (value.length > 1 && value.length < 31)) {
      errors.surname = false;
    } else if (!value) {
      errors.surname = 'Обязательное поле';
    } else {
      errors.surname = 'Фамилия должна быть не меньше 2 и не больше 30 символов';
    }
  };
  const validateUrl = (value, key) => {
    if (regExpUrl.test(value)) {
      errors[key] = false;
    } else if (!value) {
      errors[key] = 'Обязательное поле';
    } else {
      errors[key] = 'Введите правильный адрес, в формате: http(s)://example.com/image.png';
    }
  };

  if (Object.prototype.hasOwnProperty.call(values, 'email')) validateEmail(values.email);
  if (Object.prototype.hasOwnProperty.call(values, 'password')) validatePassword(values.password);
  if (Object.prototype.hasOwnProperty.call(values, 'name')) validateName(values.name);
  if (Object.prototype.hasOwnProperty.call(values, 'surname')) validateSurname(values.surname);
  if (Object.prototype.hasOwnProperty.call(values, 'link')) validateUrl(values.link, 'link');

  return errors;
};
