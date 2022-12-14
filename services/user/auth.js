import { URL_BASE } from '../config'

function authLogin (credentials) {
  const URL = `${URL_BASE}auth/login`
  const options = {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }

  return fetch(URL, options)
}

export {
  authLogin
}
