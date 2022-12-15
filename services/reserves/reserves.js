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

function getTopRentalReserves (token, initDate, endDate, operation, size) {
  let initDateParam = ''
  let endDateParam = ''
  let sizeParam = ''
  let operationParam = ''
  if (initDate) {
    initDateParam = initDate
  }
  if (endDate) {
    endDateParam = endDate
  }
  if (size) {
    sizeParam = size
  }
  if (operation) {
    operationParam = operation
  }
  const URL = `${URL_BASE}reserves/filter?initialDate=${initDateParam}&finalDate=${endDateParam}&size=${sizeParam}&operation=${operationParam}`
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
