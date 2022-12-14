import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
import { getTopRentalReserves } from '/services/reserves/reserves'
import { format } from 'date-fns'

export default function DatePickerEarn ({ setGanancias }) {
  const [value, setValue] = React.useState([null, null])

  const getEarns = async (dates) => {
    const token = localStorage.getItem('token')
    try {
      let response
      if (dates == null) {
        response = await getTopRentalReserves(token, null, null, null, null)
        const { data: { reserves } } = await response.json()
        setGanancias('$' + Number(getTotalEarns(reserves, type)).toFixed(2))
      } else {
        if (completeDate(dates)) {
          response = await getTopRentalReserves(token, format(dates[0].$d, 'yyyy-MM-dd'), format(dates[1].$d, 'yyyy-MM-dd'), null, null)
          const { data: { reserves } } = await response.json()
          setGanancias('$' + Number(getTotalEarns(reserves)).toFixed(2))
        } else {
          if (dates[0] == null && dates[1] == null) {
            response = await getTopRentalReserves(token, null, null, null, null)
            const { data: { reserves } } = await response.json()
            setGanancias('$' + Number(getTotalEarns(reserves, type)).toFixed(2))
          }
        }
      }
    } catch (error) {}
  }

  const sum = [1, 2, 3].reduce(add, 0) // with initial value to avoid when the array is empty

  function add (accumulator, reserve) {
    return accumulator + reserve.totalAmountPrice
  }

  function getTotalEarns (reserves) {
    if (reserves && reserves.length > 0) {
      return reserves.reduce(add, 0)
    } else {
      return 0
    }
  }

  useEffect(() => {
    getEarns(null)
  }, [])

  function completeDate (dates) {
    return dates && dates.length == 2 && dates[0] != null && dates[1] != null
  }

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: 'Fecha Inicio', end: 'Fecha Fin' }}
    >
      <DateRangePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
          getEarns(newValue)
        }}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> hasta </Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </LocalizationProvider>
  )
}
