import React from 'react'
import Input from './Input'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function LoginCard () {
  const router = useRouter()

  const handleDashboard = () => {
    router.push('/dashboard')
  }
  return (
    <>
      <article className='container card login-card p-4 shadow'>
        <div className='row d-flex'>
          <div className='col-12'>
            <h1 className='text-center login-card__title mb-4 mt-3'>Perfil de negocio</h1>
            <form>
              <Input title='Usuario' />
              <Input title='Contraseña' type='password' />
              <div className='mb-3 mt-4 form-check'>
                <input type='checkbox' className='form-check-input login-card__box' id='exampleCheck1' />
                <label className='form-check-label login-card__checkbox' htmlFor='exampleCheck1'>Recuérdame</label>
              </div>
              <Link href={'/dashboard'}  className='btn btn-movebike contained shadow login-card__btn w-100 mb-3'>Iniciar sesión</Link>
            </form>
          </div>
        </div>
      </article>
    </>
  )
}
