import React from 'react'

export default function BookedCategory({title, description}) {
  return (
    <div className="d-flex">
                <p className="fw-bold mb-1 me-2">{title} </p>
                <p className="mb-0">{description}</p>
                </div>
  )
}
