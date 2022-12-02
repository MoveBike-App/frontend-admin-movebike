import { URL_BASE } from "../user/config";

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

export { getAllMotos }
