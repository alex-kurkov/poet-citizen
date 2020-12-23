import config from '../config';
const { baseUrl } = config;

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["_getResponseData"] }] */
  _getResponseData(res) {
    return new Promise((resolve, reject) => {
      const func = res.status < 400 ? resolve : reject;
      res.json().then(func);
    });
  }

  getCards(jwt) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
      method: 'GET',
      /*       credentials: 'include', */
    })
      .then(this._getResponseData);
  }

  postCard({ rhyme, link }, jwt) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
      method: 'POST',
      body: JSON.stringify({ rhyme, link }),
      /*       credentials: 'include', */
    })
      .then(this._getResponseData);
  }

  deleteCard({ _id }, jwt) {
    return fetch(`${this._baseUrl}/cards/${_id}`, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
      method: 'DELETE',
      /*       credentials: 'include', */
    })
      .then(this._getResponseData);
  }

  getUserData(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
      /*       credentials: 'include', */
    })
      .then(this._getResponseData);
  }

  setUserData({ name, surname }, jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
      method: 'PATCH',
      /*       credentials: 'include', */
      body: JSON.stringify({ name, surname }),
    })
      .then(this._getResponseData);
  }

  changeLikeStatus(cardId, isLiked, jwt) {
    const method = isLiked ? 'PUT' : 'DELETE';
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
      /*       credentials: 'include', */
      method,
    })
      .then(this._getResponseData);
  }
}

export default new Api({ baseUrl });
