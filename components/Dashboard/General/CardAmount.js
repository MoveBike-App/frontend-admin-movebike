import React from 'react'

export default function CardAmount({amount, title}) {
  return (
    <div className='col-12 col-md-4'>
                    <div className='card mb-4 general__cardAmount shadow-sm mx-auto mt-4'>
                      <h3 className='general__amount card-body text-center mb-0'>{amount}</h3>
                      <div className='general__cardFooter card-footer d-flex align-items-center justify-content-between'>
                        <a className='me-4 general__cardInfo small stretched-link text-decoration-none' href='#'>{title}</a>
                        <div className='small'><i className='fas fa-angle-right' /></div>
                      </div>
                    </div>
                  </div>
  )
}
