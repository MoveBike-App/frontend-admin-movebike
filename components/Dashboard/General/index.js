import React from 'react'
import CardAmount from './CardAmount'
import CustomDay from './CustomDay'
import Search from './Search'
import TopRentalCard from './TopRentalCard'

export default function General () {
  return (
    <>
      <section className='container-fluid text-center text-md-start'>
        <div className='row mt-3 m-md-3'>
          <h1 className='m-2 p-0 dashboard__title'>General</h1>

          <section className='col-12 col-lg-7'>

            <div className='container'>
              <div className='row'>
                <CardAmount amount='15' title='Rentas actuales' />
                <CardAmount amount='6' title='Rentas próximas' />
                <CardAmount amount='3' title='Rentas canceladas' />

              </div>
              <h3 className='mt-5'>Top rentals</h3>
              <TopRentalCard
                img='/assets/images/flotebikers/vitalia-125.webp'
                name='Scooter Vitalia 150 Azul'
                date='Oct 23, 2022'
                reserves='25'
              />
              <TopRentalCard
                img='/assets/images/flotebikers/blue-scooter.webp'
                name='Scooter Vitalia 150 Azul'
                date='Oct 23, 2022'
                reserves='20'
              />
              <TopRentalCard
                img='/assets/images/flotebikers/scooter-blackblue.webp'
                name='Scooter Vitalia 150 Azul'
                date='Oct 23, 2022'
                reserves='15'
              />

            </div>
          </section>
          <section className='col-12 col-lg-5'>
            <div className='container'>
              <div className='row d-flex'>
                <div className='col-12'>
                  <Search />
                </div>
                <div className='mt-5 card shadow-sm general__datepicker mx-auto'>
                  <h5 className=' mt-4 text-center'>Calendario de reservas</h5>
                  <div className='mt-1 col-12 mx-auto'>
                    <CustomDay />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
