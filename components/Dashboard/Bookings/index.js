import React, { useEffect, useRef, useState } from 'react'
import { Grid } from 'gridjs-react'
import 'gridjs/dist/theme/mermaid.css'
import { getReserves } from '/services/reserves/reserves'

export default function Bookings () {
  const tableRef = useRef(null)
  const wrapperRef = useRef(null)
  // const [reserves, setReserves] = useState([]);

  const row = (reserves) =>
    reserves.map((reserva) => [
      reserva.reserveNumber,
      reserva.status,
      reserva.initialDate,
      reserva.finalDate
    ])
  const [data, setData] = useState([])

  console.log(data)

  const [pageSize, setPageSize] = React.useState(5)

  const getAllReserves = async () => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('userCurrent')
    const { id, slug } = JSON.parse(user)
    try {
      const response = await getReserves(token)
      console.log(response.data.data.reserves)
      setData(row(response.data.data.reserves))
      const rows = []
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllReserves()
  }, [])

  return (
    <main className='container-fluid bookings'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='bookings__title'>Mis reservas</h1>
          </div>
          <div className='col-md-12 mx-auto'>
            <div>
              <Grid
                data={data}
                columns={[
                  { id: 'reserveNumber', name: 'No. Reserva' },
                  { id: 'status', name: 'Estado' },
                  { id: 'initialDate', name: 'Fecha Inicial' },
                  { id: 'finalDate', name: 'Fecha Fin' },
                  { name: 'Actions' }
                ]}
                search
                sort
                pagination={{
                  enabled: true,
                  limit: 10
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
