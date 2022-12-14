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

function getTopRentalReserves (token,size) {
  const URL = `${URL_BASE}reserves/filter?size=${size}`
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

function editReserve (token, id, status) {
  const URL = `${URL_BASE}reserves/${id}`
  const options = {
    method: 'PATCH',
    body: JSON.stringify({
      status
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    mode: 'cors'
  }
  return fetch(URL, options)
}

export { getAllReserves, editReserve, getTopRentalReserves }
