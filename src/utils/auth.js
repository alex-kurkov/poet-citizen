import config from '../config';
const { baseUrl } = config;

const getResponseData = (res) => new Promise((resolve, reject) => {
  const func = res.ok ? resolve : reject;
  res.json().then(func);
});

const register = ({ password, email, name, surname }) => fetch(`${baseUrl}/signup`,
  {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ password, email, name, surname }),
  })
  .then(getResponseData);

const login = ({ password, email }) => fetch(
  `${baseUrl}/signin`,
  {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ password, email }),
  },
)
  .then(getResponseData);

const logout = () => fetch(`${baseUrl}/signout`,
  {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    /*     credentials: 'include', */
    method: 'POST',
  })
  .then(getResponseData);

const checkToken = (jwt) => fetch(`${baseUrl}/users/me`,
  {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${jwt}`,
    },
    /*     credentials: 'include', */
    method: 'GET',
  })
  .then(getResponseData);

export {
  register, login, checkToken, logout,
};
