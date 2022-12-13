import React, { useEffect, useState } from 'react'
import CardAmount from './CardAmount'
import CustomDay from './CustomDay'
import Search from './Search'
import TopRentalCard from './TopRentalCard'
import { format } from 'date-fns'
import { getTopRentalReserves } from '/services/reserves/reserves'
import { getAllReserves } from '/services/reserves/reserves'
import { Link } from '@mui/material'

export default function General () {
  const [reserves, setReserves] = useState([])
  const getTopRentals = async () => {
    const token = localStorage.getItem('token')
    try {
      const response = await getTopRentalReserves(token)
      const { data: { reserves } } = await response.json()
      setReserves(reserves)
    } catch (error) {}
  }

 const today = format(new Date(), 'dd/MMM/yyyy')

  useEffect(() => {
    getTopRentals()
  }, [])

  const getReserves = async () => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('userCurrent')
    try {
      const response = await getAllReserves(token)
      const {
        data: { reserves }
      } = await response.json()
      setData(row(reserves))
      setReserves(reserves)
    } catch (error) {}
  }

  useEffect(() => {
    getReserves()
  }, [])

  const getActualReserves = async () => {
    const token = localStorage.getItem('token')
    try {
      
      const response = await getAllReserves(token)
      const {
        data: { reserves }
      } = await response.json()
      setData(row(reserves))
      setReserves(reserves)
    } catch (error) {}
  }

  useEffect(() => {
    getActualReserves()
  }, [])

  return (
    <>
      <section className='container-fluid text-center text-md-start'>
        <div className='row mt-3 m-md-3'>
          <h1 className='m-2 p-0 dashboard__title'>General</h1>

          <section className='col-12 col-lg-7'>

            <div className='container'>
              <div className='row'>
                
                <CardAmount amount={reserves.length} title='Total de reservas'/>
                <CardAmount amount='6' title='Reservas actuales' />
                <CardAmount amount='3' title='Reservas canceladas' />

              </div>
              <h3 className='mt-5'><i class='fa fa-star-o edit-icon fa-xs me-2' aria-hidden='true' />Top 5 rentals 
 </h3>
              {reserves
              .map((reserve) => (
                <TopRentalCard
                key={reserve._id}
                name={reserve.vehicle.name}
                price={reserve.vehicle.price}
                model={reserve.vehicle.model}
                img={reserve.vehicle.image}
                date= {`${today}`}
                reserves={reserve.count}
                />
              ))
            }


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
