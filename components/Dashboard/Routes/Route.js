import React from 'react'
import ConfirmModal from '../../ConfirmModal'
import Image from 'next/image'
import { deleteRoute } from '/services/routes/routes'

const myLoader = ({ src }) => {
  return `${src}`
}

export default function Post ({ post, deleteRouteState, showFormEdit }) {
  let hideCloseConfirm

  const setHandleClosed = (handleClosed) => {
    hideCloseConfirm = handleClosed
  }
  const handleDelete = async () => {
    const token = localStorage.getItem('token')
    try {
      const response = await deleteRoute(token, post._id)
      const data = await response.json()
      if (data.success === true) {
        deleteRouteState(post._id)
        hideCloseConfirm()
      }
    } catch (error) {}
  }
  const modalConfig = {
    question: '¿Desea eliminar una ruta?',
    yes: 'Sí',
    no: 'No',
    button: 'iconDelete',
    callback: handleDelete,
    setCloseFunction: (func) => {
      setHandleClosed(func)
    }
  }
  return (
    <>
      <div className='col-md-6 col-lg-4'>
        <article className='article card mb-2 shadow-sm mt-4'>
          <div className='px-4 pt-3'>
            <div className='d-flex'>
              <div className='card-body text-center'>
                <h2 className='article__title text-center'>{post.title}</h2>
                <Image
                  className='route__img mt-3'
                  loader={myLoader}
                  src={`${post.image}`}
                  alt='route img'
                  width={300}
                  height={200}
                />
              </div>
            </div>
            <div className='d-flex justify-content-center route'>
              <button
                className=' btn route__btns'
                onClick={() => {
                  showFormEdit(post)
                }}
              >Editar
              </button>

              <ConfirmModal modalConfig={modalConfig} />

              <div className='' />
            </div>
            <div className='identation p-3 pt-2 wrapper-tags' />
          </div>
        </article>
      </div>
    </>
  )
}
