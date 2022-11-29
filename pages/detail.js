import Image from 'next/image'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import BookedCategory from '../components/Dashboard/Bookings/BookedCategory'
import LayoutDashboard from '../components/LayoutDashboard'
import NavbarDashboard from '../components/NavbarDashboard'
const iconUpload = '/assets/icons/icon-upload.webp'

export default function ReservationInfo ({}) {
  return (
    <>
      <LayoutDashboard>
        <section className='container-fluid'>
          <div className='container card mt-4'>
            <h2 className='card-body m-5'>
              Reserva #134
              <p className='mt-2'>
                Pago vía Credit card / debeit card
                (ch_3L8Y52EmGg707AUK0UIC6ODV). Pagó el 25 de Julio de 2022, a
                11:16 am Customer IP: 2601:280:4d00:e730:dcce:4ef6:564:eee7
              </p>
              <hr />
              <section className='bookDetail text-center text-md-start mt-3'>
                <div class='row'>
                  <div className='col-md-4 text-center'>
                    <div class='dropdown'>
                      <button
                        class='btn btn-movebike contained status-dropdown dropdown-toggle'
                        type='button'
                        id='dropdownMenuButton1'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'
                      >
                        Status
                      </button>
                      <ul
                        class='dropdown-menu'
                        aria-labelledby='dropdownMenuButton1'
                      >
                        <li>
                          <a class='dropdown-item' href='#'>
                            Reservada
                          </a>
                        </li>
                        <li>
                          <a class='dropdown-item' href='#'>
                            En camino
                          </a>
                        </li>
                        <li>
                          <a class='dropdown-item' href='#'>
                            En punto de entrega
                          </a>
                        </li>
                        <li>
                          <a class='dropdown-item' href='#'>
                            Entregado
                          </a>
                        </li>
                        <li>
                          <a class='dropdown-item' href='#'>
                            Cancelado
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='col-md-8'>
                    <div className='row'>
                      <div class='col-md-6 col-xs-12 mb-2'>
                        <h6>Detalles de reserva</h6>
                        <p class='mb-0'>Joe Doe</p>
                        <p class='mb-0'>Cancún</p>
                        <p>Hotel Riu Palace, Mexico</p>
                      </div>
                      <div class='col-md-6 col-xs-12 mb-3'>
                        <h6>Pagó por </h6>
                        <p class='mb-0'>Credit Card/Debit Card</p>
                        <p class='mb-0'>(ch_3568fkf598fkkfn268jdjdD)</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div class='d-none d-xs-block  d-sm-block mt-3' />
                      <div class='col-md-6 col-xs-12 mb-2 '>
                        <h6>Email</h6>
                        <p>joedoe.2569@yahoo.com</p>
                      </div>
                      <div class='col-md-6 col-xs-12 mb-2'>
                        <h6>Teléfono</h6>
                        <p>+52 598-562-5625</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className='me-0 ms-0' />

                <section className='row '>
                  <div className='col-md-4 text-center'>
                    <Image
                      className='text-center'
                      src='/assets/images/flotebikers/vitalia-125.webp'
                      alt='moto vitalia'
                      width={130}
                      height={100}
                    />
                  </div>
                  <div className='col-md-4 text-center text-md-start'>
                    <h6>Producto</h6>
                    <BookedCategory
                      title='Nombre'
                      description='Scooter Sport 150'
                    />
                    <BookedCategory
                      title='Fecha inicio:'
                      description='01/20/2022'
                    />
                    <BookedCategory
                      title='Fecha fin:'
                      description='03/20/2022'
                    />
                    <BookedCategory title='Días:' description='2' />
                    <BookedCategory
                      title='Lugar:'
                      description='Cancún, Quintana Roo'
                    />
                  </div>
                  <div className='col-md-1 text-center'>
                    <h6>Cantidad</h6>
                    <h5 className='mt-3'>1</h5>
                  </div>
                  <div className='col-md-3 text-center'>
                    <h6>Total</h6>
                    <h5 className='mt-3'>$5000.00</h5>
                  </div>
                </section>
              </section>
              <hr />
              <div className='d-flex justify-content-end'>
                <h5 className='me-3'>Subtotal:</h5>
                <h4>$4,899.00</h4>
              </div>
              <div className='d-flex justify-content-end'>
                <h5 className='me-3'>Reserva total:</h5>
                <h4>$4,899.00</h4>
              </div>
            </h2>
          </div>
        </section>
      </LayoutDashboard>
    </>
  )
}
