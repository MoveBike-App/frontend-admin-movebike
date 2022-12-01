const axios = require('axios')

/* function createReserve(
  vehicle,
  totalPrice,
  isPaid,
  initialDate,
  finalDate,
  token
) {
  const URL = `${process.env.NEXT_PUBLIC_URL_API}reserves`;

  return axios.post(
    URL,
    { vehicle, totalPrice, isPaid, initialDate, finalDate },
    { headers: { Authorization: token } }
  );
} */

function getReserves (token) {
  const URL = `${process.env.NEXT_PUBLIC_URL_API}reserves`

  return axios.get(URL, { headers: { Authorization: token } })
}

export { getReserves }
