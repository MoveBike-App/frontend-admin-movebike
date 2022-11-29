import React, { useState } from 'react'
import { useRouter } from 'next/router'
import ConfirmModal from './ConfirmModal'

export default function NavbarDashboard () {
  const handleClick = optionSelected => {
    const containerContents = document.getElementsByClassName('dashboard-content__section')
    const menuOptions = document.getElementsByClassName('menu-left-mobile__option')
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
    <>
      <div className='offcanvas offcanvas-start' data-bs-scroll='true' tabIndex='-1' id='offcanvasWithBothOptions' aria-labelledby='offcanvasWithBothOptionsLabel'>
        <div className='offcanvas-header'>
          <div className='nav-dashboard__hamburger' data-bs-dismiss='offcanvas'>
            <img src='/assets/icons/menu_left.svg' alt='icon menu' />
          </div>
        </div>
        <div className='offcanvas-body'>
          <nav className='menu-left-mobile'>
            <div className='menu-left-mobile__option active' onClick={() => handleClick(0)}>
              <img src='/assets/icons/icon-dashboard-white.webp' alt='icon menu' />
              <p>Dashboard</p>
            </div>
            <div className='menu-left-mobile__option' onClick={() => handleClick(1)}>
              <img src='/assets/icons/icon-reserve-white.webp' alt='icon menu' />
              <p>Reservas</p>
            </div>
            <div className='menu-left-mobile__option' onClick={() => handleClick(2)}>
              <img src='/assets/icons/icon-motos-white.webp' alt='icon menu' />
              <p>Motos</p>
            </div>
            <div className='menu-left-mobile__option' onClick={() => handleClick(3)}>
              <img src='/assets/icons/icon-routes-white.webp' alt='icon menu' />
              <p>Rutas</p>
            </div>
          </nav>
        </div>
      </div>
      <nav className='nav-dashboard'>
        <div className='nav-dashboard__hamburger' data-bs-toggle='offcanvas' data-bs-target='#offcanvasWithBothOptions' aria-controls='offcanvasWithBothOptions'>
          <img src='/assets/icons/menu_left.svg' alt='icon menu' />
        </div>
        <div className='nav-dashboard__profile'>
          <div className='d-flex justify-content-center align-items-center order-2 order-md-1'>
            <p className='d-none d-md-block'>¡Bienvenido <span>Jonatan!</span>!</p>
            <img src='/assets/avatar.png' alt='' className='avatar' />
            <i className='fas fa-chevron-down' />
          </div>
          <div className='order-1 order-md-2 notifications-logout'>
            <i className='fas fa-bell' />
            <ConfirmModal />
          </div>
        </div>
      </nav>
    </>
  )
}
