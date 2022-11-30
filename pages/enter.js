import React from 'react'
import Link from "next/link";
import Login from '../components/Login'

export default function login() {
  return (
    <section className='container-fluid login-section' id='login'>
        <Login />
    </section>
  )
}
