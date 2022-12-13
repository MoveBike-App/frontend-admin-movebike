import React from 'react'
import Image from 'next/image'
const myLoader = ({ src }) => {
  return `${src}`
}

export default function TopRentalCard ({ img, name, date, reserves, price, model }) {
  return (
    <article className='col-12 mx-auto'>
      <section className='card mb-3 mt-4 general__cardTopRental shadow-sm d-flex'>
        <div className='container mx-auto'>
          <div className='row d-flex align-items-center text-center mx-auto'>
            <div className='col-4 col-md-2 mx-auto'>
              <Image
                className='mt-3 mb-3'
                loader={myLoader}
                src={img}
                alt='Scooter top rental'
                width={71}
                height={60}
              />
            </div>
            <p className='col-4 col-md-2 mb-0 fw-bold general__topRentalInfo '>
              {name}
            </p>
            <p className='d-none d-md-block col-2 mb-0 general__topRentalInfo'>
              $ {price} .00 p/día
            </p>
            <p className='d-none d-md-block col-2 mb-0 general__topRentalInfo'>
              {model}
            </p>
            <p className='d-none d-md-block col-2 mb-0 general__topRentalInfo'>
              {date}
            </p>
            <p className='col-4 col-md-2 mb-0 general__topRentalInfo'>{reserves} reservas</p>
          </div>
        </div>
      </section>
    </article>
  )
}
