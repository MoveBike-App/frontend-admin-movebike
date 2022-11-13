import React, { useEffect, useRef } from 'react'
import { Grid } from 'gridjs'
import 'gridjs/dist/theme/mermaid.css'

import TableRow from './TableRow'

export default function Bookings () {
  const tableRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const grid = new Grid({
      sort: true,
      pagination: true,
      fixedHeader: true,
      style: {
        table: {
          'white-space': 'nowrap'
        }
      },
      search: {
        selector: (cell, rowIndex, cellIndex) =>
          cellIndex === 0 ? cell.Moto : cell
      },
      from: tableRef.current
    }).render(wrapperRef.current)
  })

  return (
    <main className='container-fluid bookings'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='dashboard__title mt-4'>Mis reservas</h1>
          </div>
          <div className='col-md-12 mx-auto'>
            <table ref={tableRef}>
              <thead>
                <tr className='bookings__titles'>
                  <th>Reserva</th>
                  <th>Fecha de reserva</th>
                  <th>Estado</th>
                  <th>Total</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  reserve='0056'
                  date='12 Nov 2022'
                  status='En camino'
                  total='4500.00'
                />
                <TableRow
                  reserve='0056'
                  date='12 Nov 2022'
                  status='En camino'
                  total='4500.00'
                />
                <TableRow
                  reserve='0056'
                  date='12 Nov 2022'
                  status='En camino'
                  total='4500.00'
                />
                <TableRow
                  reserve='0056'
                  date='12 Nov 2022'
                  status='En camino'
                  total='4500.00'
                />
                <TableRow
                  reserve='0056'
                  date='12 Nov 2022'
                  status='En camino'
                  total='4500.00'
                />
              </tbody>
            </table>
            <div ref={wrapperRef} />
          </div>
        </div>
      </div>
    </main>
  )
}
