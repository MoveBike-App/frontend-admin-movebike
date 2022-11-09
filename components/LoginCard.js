import React from 'react'
import Input from './Input'

export default function LoginCard () {
  return (
    <>
      <div className='container card login-card p-4 shadow'>
        <div className='row d-flex'>
          <div className='col-12'>
            <h1 className='text-center login-card__title mb-5 mt-3'>Perfil de negocio</h1>
            <form>
              <Input title='Usuario' />
              <Input title='Contraseña' type='password' />
              <div className='mb-3 mt-4 form-check'>
                <input type='checkbox' className='form-check-input' id='exampleCheck1' />
                <label className='form-check-label login-card__checkbox' htmlFor='exampleCheck1'>Recuérdame</label>
              </div>
              <button type='submit' className='btn btn-movebike contained shadow login-card__btn w-100 mb-5'>Iniciar sesión</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
