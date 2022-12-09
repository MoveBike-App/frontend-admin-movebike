import React, { useEffect, useState } from 'react'
import { Grid, _ } from 'gridjs-react'
import Image from 'next/image'
import BookDetail from '../../Dashboard/Bookings/BookDetail'
import 'gridjs/dist/theme/mermaid.css'
import { format } from 'date-fns'
import es from 'date-fns/locale/es'
import { getAllReserves } from '/services/reserves/reserves'

const myLoader = ({ src }) => {
  return `${src}`
}
export const StatusDefinition = new Map()

StatusDefinition.set('processing', 'En proceso')
StatusDefinition.set('reserved', 'Reservado')
StatusDefinition.set('onWay', 'En camino')
StatusDefinition.set('delivered', 'Entregado')
StatusDefinition.set('canceled', 'Cancelado')
StatusDefinition.set('backInStock', 'Devuelta')

export default function Bookings () {
  const [showReserve, setShowReserve] = useState(false)
  const [currentBookDetail, setCurrentBookDetail] = useState({})
  const handleClose = () => setShowReserve(false)

  const row = (reserves) =>
    reserves.map((reserva) => [
      (reserva.vehicle ? reserva.vehicle.image : 'Reserva prueba'),
      reserva.reserveNumber,
      (reserva.customer ? reserva.customer.name : 'Reserva prueba'),
      `$ ${reserva.totalPrice}`,
      reserva.status,
      reserva.initialDate
        ? format(new Date(reserva.initialDate), 'dd/MM/yyyy H:mm b', {
          locales: es
        })
        : 'N/A',
      reserva.finalDate
        ? format(new Date(reserva.finalDate), 'dd/MM/yyyy H:mm b', {
          locales: es
        })
        : 'N/A',
      reserva
    ])

  const [reserves, setReserves] = useState([])
  const [data, setData] = useState([])

  const getReserves = async () => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('userCurrent')
    try {
      const response = await getAllReserves(token)
      const {
        data: { reserves }
      } = await response.json()
      setData(row(reserves))
      setReserves(reserves)
    } catch (error) {}
  }

  const refreshTable = (reserve) => {
    reserves.find((r) => r._id === reserve._id).status = reserve.status
    setData(row(reserves))
  }

  useEffect(() => {
    getReserves()
  }, [])

  return (
    <main className='container-fluid bookings'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='dashboard__title'>Mis reservas</h1>
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
                  {
                    id: 'reserveNumber',
                    name: 'No. Reserva',
                    formatter: (cell) =>
                      _(
                        <p className='number-pill rounded-pill bg-light text-dark p-2 pe-3 ps-3'>{cell}</p>
                      )
                  },
                  { id: 'customer', name: 'Cliente' },
                  { id: 'totalPrice', name: 'Total' },
                  {
                    id: 'status',
                    name: 'Estado',
                    formatter: (cell) =>
                      _(
                        <p className='status-pill rounded-pill bg-light p-1 pe-1 ps-1'>{StatusDefinition.get(cell)}</p>
                      )
                  },
                  { id: 'initialDate', name: 'Fecha Inicial' },
                  { id: 'finalDate', name: 'Fecha Fin' },
                  {
                    name: 'Detalles',
                    formatter: (cell) =>
                      _(
                        <div>
                          <button
                            className='btn border-0 crud-icons'
                            onClick={() => {
                              setCurrentBookDetail(cell)
                              setShowReserve(true)
                            }}
                          >
                            <i class='fa fa-xl fa-edit edit-icon' aria-hidden='true' />
                          </button>
                        </div>
                      )
                  }
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
      <BookDetail
        show={showReserve}
        edit={false}
        handleClose={handleClose}
        handleClick={handleClose}
        onHide={() => setShowReserve(false)}
        reserve={currentBookDetail}
        refreshTable={refreshTable}
      />
    </main>
  )
}
