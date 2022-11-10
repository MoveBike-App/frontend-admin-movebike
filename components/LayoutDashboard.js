import { useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../components/NavbarDashboard'

export default function LayoutDashboard ({ children }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])

  return (
    <>
      <Head>
        <title>Motoenvia</title>
      </Head>
      <Navbar />
      {children}
    </>
  )
}
