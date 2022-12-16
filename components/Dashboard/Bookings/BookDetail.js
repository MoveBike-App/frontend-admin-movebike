import Image from 'next/image'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import StatusDropdown from './StatusDropdown'
import Modal from 'react-bootstrap/Modal'
import BookedCategory from './BookedCategory'

const myLoader = ({ src }) => {
  return `${src}`
}

export default function BookDetail ({
  show,
  handleClick,
  handleClose,
  reserve,
  refreshTable
}) {
  if (!reserve) {
    reserve = {}
  }
  return (
    <>
      <Modal
        onHide={handleClose}
        show={show}
        size='l'
        aria-labelledby='contained-modal-title-vcenter'
        backdrop='static'
        centered
        className='BookDetail'
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Reserva #{reserve ? reserve.reserveNumber : ''}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className='bookDetail me-3 ms-3 text-center text-md-start'>
            <div className='row'>
              <div className='col-md-8'>
                <div class='row'>
                  <div class='col-md-6 col-xs-12 mb-2'>
                    <h6>Detalles de reserva</h6>
                    <p class='mb-0'>
                      {reserve.customer ? reserve.customer.name : 'MOVEBIKE'}
                    </p>
                    <p>{reserve ? reserve.address : 'SUCURSAL' }</p>
                  </div>
                  <div class='col-md-6 col-xs-12 mb-3'>
                    <h6>Pagó por </h6>
                    <p class='mb-0'>Credit Card/Debit Card</p>
                    <p class='mb-0'>{reserve ? reserve.payment_id : ''}</p>
                  </div>

                  <div class='d-none d-xs-block  d-sm-block mt-3' />
                  <div class='col-md-6 col-xs-12 mb-2 '>
                    <h6>Email</h6>
                    <p>{reserve.customer ? reserve.customer.email : ''}</p>
                  </div>
                  <div class='col-md-6 col-xs-12 mb-2'>
                    <h6>Teléfono</h6>
                    <p>{reserve.customer ? reserve.customer.phone : ''}</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <Image
                  className='mt-3'
                  loader={myLoader}
                  src={`${reserve.vehicle ? reserve.vehicle.image : ''}`}
                  alt='moto img'
                  width={200}
                  height={200}
                />
              </div>
            </div>

            <hr className='me-0 ms-0' />
            <section className='row '>
              <div className='col-md-5 text-center text-md-start'>
                <h6>Producto</h6>
                <BookedCategory
                  title='Nombre'
                  description={reserve.customer ? reserve.vehicle.name : ''}
                />
                <BookedCategory
                  title='Fecha inicio:'
                  description={reserve ? reserve.initialDate : ''}
                />
                <BookedCategory
                  title='Fecha fin:'
                  description={reserve ? reserve.finalDate : ''}
                />
                <BookedCategory title='Días:' description='2' />
                <BookedCategory
                  title='Lugar:'
                  description='Cancún, Quintana Roo'
                />
              </div>
              <div className='col-md-3 text-center'>
                <h6>Cantidad</h6>
                <h5 className='mt-3'>1</h5>
              </div>
              <div className='col-md-4 text-center'>
                <h6>Total</h6>
                <h5 className='mt-3'>
                  $ {reserve.totalPrice}.00 <p className='mt-1'>MXN</p>
                </h5>
              </div>
            </section>
          </section>
        </Modal.Body>
        <Modal.Footer />
        <div className='m-3 mx-auto'>
          <StatusDropdown
            reserve={reserve}
            id={reserve._id}
            refreshTable={refreshTable}
          />
        </div>
      </Modal>
    </>
  )
}
