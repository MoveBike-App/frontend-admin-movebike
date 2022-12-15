import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Dashboard from '../components/Dashboard'

export default function Admin () {
  const router = useRouter()
  const [isLogged, setIsLogged] = useState()
  const getToken = () => {
    const token = localStorage.getItem('token')
    if(!token) {
      router.push('/')
      return;
    }
    setIsLogged(true)
  }
  useEffect(() => {
    getToken()
  }, [])
  return (
    <>
    {isLogged ? <Dashboard /> : null}
    </>
  )
}
