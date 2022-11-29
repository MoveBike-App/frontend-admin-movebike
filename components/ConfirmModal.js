import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function ConfirmModal () {
  const router = useRouter()
  const [show, setShow] = useState(false)

  const signOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userCurrent')
    localStorage.clear()
    router.push('/')
    setShow(false)
  }
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <>
      <i className='fas nav-dashboard__signOut fa-sign-out-alt d-none d-md-block' onClick={handleShow} />

      <Modal className='w-100' show={show} onHide={handleClose}>
        <Modal.Header closeButton className='btn__close-modal' />
        <Modal.Body className='text-center'>¿Desea cerrar sesión?</Modal.Body>
        <Modal.Footer>
          <div className='mx-auto'>
            <Button className='me-2 btn-movebike contained btn__confirm-modal' onClick={handleClose}>
              No
            </Button>
            <Button className='ms-2 btn-movebike outlined btn__confirm-modal' onClick={signOut}>
              Sí
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}
