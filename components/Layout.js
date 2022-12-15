import Head from 'next/head'
import React from 'react'
import Nav from './Nav'

export default function Layout ({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Nav />
      {children}
    </>
  )
}
