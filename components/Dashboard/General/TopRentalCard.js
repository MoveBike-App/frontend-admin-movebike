import React from 'react'
import Image from 'next/image'

export default function TopRentalCard ({ img, name, date, reserves }) {
  return (
    <article className='col-12 mx-auto'>
      <section className='card mb-3 mt-4 general__cardTopRental shadow-sm d-flex'>
        <div className='container mx-auto'>
          <div className='row d-flex align-items-center text-center mx-auto'>
            <div className='col-4 col-md-2 mx-auto'>
              <Image
                className='mt-3 mb-3'
                src={img}
                alt='Scooter top rental'
                width={71}
                height={60}
              />
            </div>
            <p className='col-4 col-md-3 mb-0'>
              {name}
            </p>
            <p className='d-none d-md-block col-3 mb-0'>
              Cancún, Quintana Roo
            </p>
            <p className='d-none d-md-block col-2 mb-0'>
              {date}
            </p>
            <p className='col-4 col-md-2 mb-0'>{reserves} reservas</p>
          </div>
        </div>
      </section>
    </article>
  )
}
