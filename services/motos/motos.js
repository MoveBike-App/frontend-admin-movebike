import { URL_BASE } from '../config'

function getAllMotos (token) {
  const URL = `${URL_BASE}motos`

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

function createMoto (token, data) {
  const URL = `${URL_BASE}motos`
  const options = {
    method: 'POST',
    body: data,
    headers: {
      Authorization: token,
      mode: 'cors'
    }
  }
  return fetch(URL, options)
}

function deleteMoto (token, id) {
  const URL = `${URL_BASE}motos/${id}`
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    mode: 'cors'
  }
  return fetch(URL, options)
}

function editMoto (token,id, data) {
  const URL = `${URL_BASE}motos/${id}`
  const options = {
    method: 'PATCH',
    body: data,
    headers: {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
        mode:'cors'
      }
    }
  }
  return fetch(URL, options)
}

export {
  getAllMotos,
  createMoto,
  deleteMoto,
  editMoto
}