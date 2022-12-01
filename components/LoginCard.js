<<<<<<< HEAD
import React from 'react'
import Input from './Input'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function LoginCard () {
  const router = useRouter()

  const handleDashboard = () => {
    router.push('/dashboard')
  }
=======
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
const axios = require('axios')

export default function LoginCard () {
  const router = useRouter()
  const [isError, setIsError] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  const URL = 'https://api.movebike.mx/'

  const onSubmit = ({ email, password }) => {
    axios
      .post(`${URL}auth/login`, {
        email,
        password
      })
      .then((response) => {
        const token = response.data.token
        const { id, name, role } = response.data.userCurrent
        const userCurrent = { id, company: name, token, role: role}
        localStorage.setItem('token', token)
        localStorage.setItem('userCurrent', JSON.stringify(userCurrent))
        const returnUrl = router.query.returnUrl || '/dashboard'
        router.push(returnUrl)
      })
      .catch((error) => {
        setIsError(true)
      })
  }

>>>>>>> d52be9f162e31841f35114bb4d5c7f14dea5807d
  return (
    <>
      <article className='container card login-card p-4 shadow'>
        <div className='row d-flex'>
          <div className='col-12'>
            <h1 className='text-center login-card__title mb-4 mt-3'>Perfil de negocio</h1>
            {
                    isError
                      ? (<div
                          className='alert alert-danger d-flex align-items-center m-3'
                          role='alert'
                         >
                        <div>Credenciales inválidas</div>
                         </div>)
                      : ''

                  }
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='login__form mx-auto'
            >
              <div className='form-group mb-3'>
                <label
                  htmlFor='exampleInputEmail1'
                  className='mb-2 login__email'
                >
                  Email
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                  {...register('email', { required: 'Email Address is required' })}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && <p className='text-danger' role='alert'>{errors.email?.message}</p>}
              </div>
              <div className='form-group mb-3'>
                <label
                  htmlFor='exampleInputPassword1'
                  className='mb-2 login__email'
                >
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                  {...register('password', { required: 'Password is required' })}
                  aria-invalid={errors.password ? 'true' : 'false'}
                />
                {errors.password && <p className='text-danger' role='alert'>{errors.password?.message}</p>}
              </div>
              <div className='mb-3 ms-1 form-check'>
                <input type='checkbox' className='form-check-input login-card__box' id='exampleCheck1' />
                <label className='form-check-label login-card__checkbox' htmlFor='exampleCheck1'>Recuérdame</label>
              </div>
<<<<<<< HEAD
              <Link href={'/dashboard'}  className='btn btn-movebike contained shadow login-card__btn w-100 mb-3'>Iniciar sesión</Link>
=======
              <button type='submit' className='btn btn-movebike contained shadow login-card__btn w-100 mb-3'>Iniciar sesión</button>

>>>>>>> d52be9f162e31841f35114bb4d5c7f14dea5807d
            </form>

          </div>
        </div>
      </article>
    </>
  )
}
