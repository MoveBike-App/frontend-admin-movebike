import React from 'react'

export default function Input ({ title, type }) {
  return (
    <div className='mb-3'>
      <label className='form-label'>{title}</label>
      <input type={type} className='form-control login-card__input' />
    </div>
  )
}
