import { URL_BASE } from '../config'

function getAllReserves (token) {
  const URL = `${URL_BASE}reserves`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    mode: 'cors'
  }
  return fetch(URL, options)
}

export { getAllReserves }
