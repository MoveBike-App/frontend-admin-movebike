import React, {  useState } from 'react'
import dayjs from 'dayjs'

import { Box, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateRangePicker } from '@mui/x-date-pickers-pro';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


export default function RangeEarnPicker() {
    const [value, setValue] = useState(dayjs('2022-04-07'))

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DateRangePicker
    displayStaticWrapperAs="desktop"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(startProps, endProps) => (
      <React.Fragment>
        <TextField {...startProps} />
        <Box sx={{ mx: 2 }}> to </Box>
        <TextField {...endProps} />
      </React.Fragment>
    )}
  />
</LocalizationProvider>
  );
}