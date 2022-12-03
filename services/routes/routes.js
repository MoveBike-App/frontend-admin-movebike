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

export {
  getAllRoutes,
  deleteRoute
}
