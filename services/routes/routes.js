const URL_BASE = process.env.NEXT_PUBLIC_URL_API

function getAllRoutes () {
  const URL = `${URL_BASE}routes`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return fetch(URL, options)
}

function createRoute (token, data) {
  const URL = `${URL_BASE}routes`
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

function deleteRoute (token, id) {
  const URL = `${URL_BASE}routes/${id}`
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

function editRoute (token, id, data) {
  const URL = `${URL_BASE}routes/${id}`
  const options = {
    method: 'PATCH',
    body: data,
    headers: {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
        mode: 'cors'
      }
    }
  }
  return fetch(URL, options)
}

export {
  getAllRoutes,
  createRoute,
  deleteRoute,
  editRoute
}
