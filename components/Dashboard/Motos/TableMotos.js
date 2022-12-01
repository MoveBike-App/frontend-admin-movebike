<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import Image from "next/image";
import AddMoto from "./AddMoto";
import MessageModal from "../../MessageModal";
=======
import React, { useEffect, useRef, useState } from 'react'
import { Grid } from 'gridjs'
import 'gridjs/dist/theme/mermaid.css'
import Image from 'next/image'
import AddMoto from './AddMoto'
>>>>>>> d52be9f162e31841f35114bb4d5c7f14dea5807d

const wsSport150 = '/assets/images/flotebikers/ws-sport-150.webp'
const vitalia125 = '/assets/images/flotebikers/vitalia-125.webp'
const vitalia150 = '/assets/images/flotebikers/a-150.webp'

<<<<<<< HEAD
export default function TableMotos() {
  const tableRef = useRef(null);
  const wrapperRef = useRef(null);
  const [add, setAddMoto] = useState(false);
  const handleClose = () => setAddMoto(false);
  const handleClick = () => setAddMoto(true);
  

  
=======
export default function TableMotos () {
  const tableRef = useRef(null)
  const wrapperRef = useRef(null)
  const [add, setAddMoto] = useState(false)
  const handleClose = () => setAddMoto(false)
  const handleClick = () => setAddMoto(true)
>>>>>>> d52be9f162e31841f35114bb4d5c7f14dea5807d

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
          cellIndex === 0 ? cell.Nombre : cell
      },
      from: tableRef.current
    }).render(wrapperRef.current)
  })
  return (
    <>
      <table ref={tableRef}>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Placa</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Image
                src={wsSport150}
                alt='Vitalia 150'
                width={85}
                height={75}
              />
            </td>
            <td>Scooter WS Sport 150Vitalia 125</td>
            <td>3</td>
            <td>$750 /day</td>
            <td>123 CRE-45W</td>
            <td>
              <button className='btn text-orange-900' onClick={handleClick}>
                <i className='fa-solid fa-pen-to-square' />
                Editar
              </button>
              <button className='btn text-orange-900'>
                <i className='fa fa-trash' />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <Image
                src={vitalia125}
                alt='Vitalia 150'
                width={85}
                height={75}
              />
            </td>
            <td>Scooter Vitalia 125</td>
            <td>4</td>
            <td>$650</td>
            <td>123 CDF-45D</td>
            <td>
              <button className='btn text-orange-900'>
                <i className='fa-solid fa-pen-to-square' />
              </button>
              <button className='btn text-orange-900'>
                <i className='fa fa-trash' aria-hidden='true' />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <Image
                src={vitalia150}
                alt='Vitalia 150'
                width={100}
                height={75}
              />
            </td>
            <td>Italika Vitalia 150 Azul</td>
            <td>5</td>
            <td>$750.00</td>
            <td>123 CDF-12W</td>
            <td>
              <button
                className='btn text-orange-900'
                onClick={() => setAddMoto(true)}
              >
                <i className='fa-solid fa-pen-to-square' />
              </button>
              <button className='btn text-orange-900'>
                <i className='fa fa-trash' aria-hidden='true' />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div id='wrapper' ref={wrapperRef} />
      <button
        className='btn btn-movebike contined'
        onClick={() => setAddMoto(true)}
      >
        Editar
      </button>

      <AddMoto
        edit
        show={add}
        handleClose={handleClose}
        handleClick={handleClose}
        onHide={() => setAddMoto(false)}
      />
      
    </>
  )
}
