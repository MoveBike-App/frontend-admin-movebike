import React, { useState } from 'react'
import LayoutDashboard from '../LayoutDashboard'
import General from './General'
import Bookings from './Bookings'

export default function Dashboard () {
  const [isActiveMenu, setIsActiveMenu] = useState(false)

  const handleClick = optionSelected => {
    const containerContents = document.getElementsByClassName('dashboard-content__section')
    const menuOptions = document.getElementsByClassName('menu-left__option')
    for (let i = 0; i < menuOptions.length; i++) {
      if (optionSelected === i) {
        containerContents.item(i).classList.remove('hidden')
        menuOptions.item(i).classList.add('active')
      } else {
        containerContents.item(i).classList.add('hidden')
        menuOptions.item(i).classList.remove('active')
      }
    }
  }
  return (
    <LayoutDashboard>
      <nav className={isActiveMenu ? 'menu-left actived d-none d-md-block' : 'menu-left d-none d-md-block'}>
        <div className='menu-left__hamburger' onClick={() => setIsActiveMenu(!isActiveMenu)}>
          <img src='/assets/icons/menu_left.svg' alt='icon menu' />
        </div>
        <div className='menu-left__option active' onClick={() => handleClick(0)}>
          <img src='/assets/icons/icon-dashboard-white.webp' alt='icon menu' />
          <p>Dashboard</p>
        </div>
        <div className='menu-left__option' onClick={() => handleClick(1)}>
          <img src='/assets/icons/icon-reserve-white.webp' alt='icon menu' />
          <p>Reservas</p>
        </div>
        <div className='menu-left__option' onClick={() => handleClick(2)}>
          <img src='/assets/icons/icon-motos-white.webp' alt='icon menu' />
          <p>Motos</p>
        </div>
        <div className='menu-left__option' onClick={() => handleClick(3)}>
          <img src='/assets/icons/icon-routes-white.webp' alt='icon menu' />
          <p>Rutas</p>
        </div>
      </nav>
      <section className={isActiveMenu ? 'dashboard-content actived' : 'dashboard-content'}>
        <section className='dashboard-content__section'>
          <General />
        </section>
        <section className='dashboard-content__section hidden'>
          <Bookings />
        </section>
        <section className='dashboard-content__section hidden'>
          <h1>Motos</h1>
        </section>
        <section className='dashboard-content__section hidden'>
          <h1>Rutas</h1>
        </section>

      </section>
    </LayoutDashboard>
  )
}
