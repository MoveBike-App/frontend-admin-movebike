import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function ConfirmModal ({ modalConfig }) {
  const signOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userCurrent')
    localStorage.clear()
    router.push('/')
    setShow(false)
  }

  modalConfig = getDefaultConfig(modalConfig)
  const router = useRouter()
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClosed = () => setShow(false)
  function getDefaultConfig (modalConfig) {
    if (modalConfig) {
      if (modalConfig.setCloseFunction) {
        modalConfig.setCloseFunction(() => setShow(false))
      }
      return modalConfig
    }
    modalConfig = {
      question: '¿Desea cerrar sesión?',
      yes: 'Sí',
      no: 'No',
      button: 'iconType',
      callback: signOut
    }
    return modalConfig
  }
  return (
    <>
      {modalConfig.button == 'iconType'
        ? (<i
            className='fas nav-dashboard__signOut fa-sign-out-alt d-none d-md-block'
            onClick={handleShow}
           />)
        : modalConfig.button == 'iconDelete'
          ? <button className=' btn route__btns ' onClick={handleShow}>
            Eliminar
          </button>
          : (<button
              className='btn'
              onClick={handleShow}
             >
            <i class='fa fa-trash' aria-hidden='true' />
             </button>
            )}
      <Modal className='w-100' show={show} onHide={handleClosed}>
        <Modal.Header closeButton className='btn__close-modal' />
        <Modal.Body className='text-center'>{modalConfig.question}</Modal.Body>
        <Modal.Footer>
          <div className='mx-auto'>
            <Button
              className='me-2 btn-movebike contained btn__confirm-modal'
              onClick={handleClosed}
            >
              {modalConfig.no}
            </Button>
            <Button
              className='ms-2 btn-movebike outlined btn__confirm-modal'
              onClick={modalConfig.callback}
            >
              {modalConfig.yes}
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}
