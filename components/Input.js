import React from 'react'

export default function Input ({ title, type }) {
  return (
    <div class='mb-3'>
      <label class='form-label'>{title}</label>
      <input type={type} class='form-control login-card__input' />
    </div>
  )
}
