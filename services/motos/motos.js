const axios = require('axios')

function getMotos (token) {
  const URL = `${process.env.NEXT_PUBLIC_URL_API}motos`

  return axios.get(URL, { headers: { Authorization: token } })
}

export { getMotos }
