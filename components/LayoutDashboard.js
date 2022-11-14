import { useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../components/NavbarDashboard'
import Script from 'next/script'

export default function LayoutDashboard ({ children }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])

  return (
    <>
      <Head>
        <title>MOVEBIKE</title>
      </Head>
        <Script src="https://kit.fontawesome.com/45194397a4.js" crossOrigin="anonymous" />
      <Navbar />
      {children}
    </>
  )
}
