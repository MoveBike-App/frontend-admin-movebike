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

export {
  getAllRoutes
}
