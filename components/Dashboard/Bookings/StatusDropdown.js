import React, { useState, useEffect } from 'react'
import { editReserve } from '../../../services/reserves/reserves'
import { StatusDefinition } from '.'

export default function StatusDropdown ({
  id,
  reserve,
  refreshTable
}) {
  const [selectedStatus, setSelectedStatus] = useState(reserve.status)
  const handleChange = (newStatus) => {
    editStatus(newStatus)
  }
  const editStatus = async (newStatus) => {
    const token = localStorage.getItem('token')
    try {
      const response = await editReserve(token, id, newStatus)
      const data = await response.json()
      if (data.success) {
        setSelectedStatus(newStatus)
        reserve.status = newStatus
        refreshTable(reserve)
      }
    } catch (error) {}
  }

  return (
    <div className='mb-2'>
      <select
        value={selectedStatus}
        onChange={(event) => handleChange(event.target.value)}
        className='form-select btn-movebike contained book-status-change'
      >
        <option value='processing'>Procesando</option>
        <option value='reserved'>Reservado</option>
        <option value='onWay'>En camino</option>
        <option value='delivered'>Entregado</option>
        <option value='canceled'>Cancelado</option>
        <option value='backInStock'>Devuelta</option>
      </select>
    </div>
  )
}
