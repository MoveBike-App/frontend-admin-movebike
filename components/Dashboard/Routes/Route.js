import React from 'react'

export default function Post ({
  title,
  image,
  idPost
}) {
  return (
    <>

      <div className='col-md-6 col-lg-4'>
        <article className='article card mb-2 shadow-sm mt-4'>
          <div className='px-4 pt-3'>
            <div className='d-flex'>
              <div className='card-body text-center'>
                <h2 className='article__title text-center'>{title}</h2>
                <img
                  className='route__img mt-3'
                  src={image}
                  alt='Profile picture'
                />
              </div>
            </div>
            <div className='d-flex justify-content-center route'>
              <button className=' btn route__btns'>Editar</button>
              <button className=' btn route__btns '>Eliminar</button>
              <button className=' btn btn-movebike route__btn outlined'>Ver más</button>
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
