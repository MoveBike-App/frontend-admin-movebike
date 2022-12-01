const axios = require('axios')
const URL_BASE = process.env.NEXT_PUBLIC_URL_API

function getAllRoutes () {
  const URL = `${URL_BASE}routes`
  return axios.get(URL)
}

export {
  getAllRoutes
}
