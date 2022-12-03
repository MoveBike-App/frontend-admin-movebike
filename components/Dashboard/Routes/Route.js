import React from 'react'
import ConfirmModal from '../../ConfirmModal'
import Image from 'next/image'
import { deleteRoute } from '/services/routes/routes'

const myLoader = ({ src }) => {
  return `${src}`
}

export default function Post ({ title, image, deletePost, deleteRouteState }) {
  const handleDelete = async () => {
    const token = localStorage.getItem('token')
    try {
      const response = await deleteRoute(token, deletePost)
      const data = await response.json()
      if (data.success === true) {
        deleteRouteState(deletePost)
      }
    } catch (error) {}
  }
  const modalConfig = {
    question: '¿Desea eliminar una ruta?',
    yes: 'Sí',
    no: 'No',
    button: 'iconDelete',
    callback: handleDelete
  }
  return (
    <>
      <div className='col-md-6 col-lg-4'>
        <article className='article card mb-2 shadow-sm mt-4'>
          <div className='px-4 pt-3'>
            <div className='d-flex'>
              <div className='card-body text-center'>
                <h2 className='article__title text-center'>{title}</h2>
                <Image
                  className='route__img mt-3'
                  loader={myLoader}
                  src={`${image}`}
                  alt='route img'
                  width={300}
                  height={200}
                />
              </div>
            </div>
            <div className='d-flex justify-content-center route'>
              <button className=' btn route__btns'>Editar</button>

              <ConfirmModal modalConfig={modalConfig} />
              <button className=' btn btn-movebike route__btn outlined'>
                Ver más
              </button>
              <div className=''>
                {/*  <h5 className='lh-lg'>
                    {description}
                </h5> */}
                {/*  <label className='article__down article__down--date d-block ms-1'>
                Creado el {createdAt}
              </label> */}
              </div>
            </div>
            <div className='identation p-3 pt-2 wrapper-tags'>
              {/*           <a href={`http://localhost:3000/posts?id=${comment}`} className='btn article__btn article__btn--action'>
               */}{' '}
              {/*  </a> */}
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
