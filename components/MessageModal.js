import { Modal } from 'bootstrap'
import React from 'react'

export default function MessageModal ({ show, body, setShow, handleClick, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
        <div className='row'>
          <div className='col-12'>
            {body}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}
