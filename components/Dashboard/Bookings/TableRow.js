

import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image'

export default function TableRow ({ reserve, date, status, total }) {
 


  return (
    <>
      <tr>
        <td>
          <div className='reserve__number shadow-sm mx-auto' >#{reserve}</div>
        </td>
        <td>
          <Image
            className='me-3'
            src='/assets/icons/eye-icon.webp'
            alt='eye icon'
            width={28}
            height={28}
          />
          {date}
        </td>
        <td>
          <button className='btn btn-movebike contained'>{status}</button>
        </td>
        <td>$ {total}</td>
        <td>
          <div className='d-flex justify-content-center pt-3 pb-3'>
            <Image
              className='me-2 ms-2'
              src='/assets/icons/edit-icon.webp'
              alt='eye icon'
              width={28}
              height={28}
            />
            <Image
              className='me-3'
              src='/assets/icons/trash-icon.webp'
              alt='eye icon'
              width={28}
              height={28}
            />
          </div>
        </td>
      </tr>
      
    </>
  )
}
