import React, { useEffect, useRef, useState } from 'react'
import { Grid, _ } from 'gridjs-react'
import { DataGrid } from '@mui/x-data-grid'
import 'gridjs/dist/theme/mermaid.css'
import Image from 'next/image'
import { getAllReserves } from '/services/reserves/reserves'

const myLoader = ({ src }) => {
  return `${src}`
}

export default function Bookings () {
  const tableRef = useRef(null)
  const wrapperRef = useRef(null)
  // const [reserves, setReserves] = useState([]);

  const row = (reserves) =>
    reserves.map((reserva) => [
      reserva.vehicle.image,
      reserva.reserveNumber,
      reserva.customer.email,
      reserva.totalPrice,
      reserva.status,
      reserva.initialDate,
      reserva.finalDate
    ])
  const [data, setData] = useState([])

  const [pageSize, setPageSize] = React.useState(5)

  const getReserves = async () => {
    const token = localStorage.getItem('token')
    /* const user = localStorage.getItem('userCurrent')
    const { id, slug } = JSON.parse(user) */
    try {
      const response = await getAllReserves(token)
      const { data: { reserves } } = await response.json()
      setData(row(reserves))
      const rows = []
    } catch (error) {
    }
  }

  useEffect(() => {
    getReserves()
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
                  {
                    id: 'image',
                    name: 'Imagen',
                    formatter: (cell) =>
                      _(
                        <Image
                          loader={myLoader}
                          src={`${cell}`}
                          alt='moto img'
                          width={80}
                          height={80}
                        />
                      )
                  },
                  { id: 'reserveNumber', name: 'No. Reserva' },
                  { id: 'customer', name: 'Cliente' },
                  { id: 'totalPrice', name: 'Total' },
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
