import Image from 'next/image'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import StatusDropdown from './StatusDropdown'
import Modal from 'react-bootstrap/Modal'
import BookedCategory from './BookedCategory'


export default function BookDetail ({
  show,
  handleClose,
  reserve,
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
            

            
          </section>
        </Modal.Body>
        <Modal.Footer />
        
      </Modal>
    </>
  )
}
