import React from 'react'

export default function Search () {
  return (
    <section className='card general__search shadow-sm mx-auto m-4 mb-5'>
      <div className='mx-auto'>
        <div className='input-group card-body my-2'>
          <input className='general__searchInput input form-control border-end-0 border' type='text' placeholder='Buscar reserva' />
          <span className='input-group-append'>
            <button className='general__searchInput general__Footer btn bg-white input border ms-n5' type='button'>
              <i className='fa fa-search general__glass' />
            </button>
          </span>
        </div>
      </div>
    </section>
  )
}
