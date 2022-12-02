import Image from 'next/image'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import CustomDay from '../General/CustomDay'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import FormData from 'form-data'
import { createMoto } from '../../../services/motos/motos'
import ConfirmModal from '../../ConfirmModal'

export default function AddMoto ({
  show,
  edit = false,
  handleClick,
  handleClose
}) {
  const router = useRouter()
  const {
    register,
    resetField,
    formState: { errors },
    handleSubmit
  } = useForm()

  const onSubmit = async ({
    image,
    name,
    vehiclePlate,
    model,
    minAge,
/*     vehicleType,
 */    securityHold,
    price,
    inssurance,
    features,
    assurance

  }) => {
    const bodyFormData = new FormData()
    bodyFormData.append("image", image['0']);
    bodyFormData.append('name', name)
    bodyFormData.append('vehiclePlate', vehiclePlate)
    bodyFormData.append('model', model)
    bodyFormData.append('minAge', minAge)
/*     bodyFormData.append('vehicleType', vehicleType)
 */    bodyFormData.append('securityHold', securityHold)
    bodyFormData.append('price', price)
    bodyFormData.append('inssurance', inssurance)
/*     bodyFormData.append('features', features)
 */    bodyFormData.append('assurance', assurance)


    const token = localStorage.getItem('token')
    try{
      const response = await createMoto(token, bodyFormData)
      const data = await response.json()
      console.log(data)
      resetField("image")
      resetField("name")
      resetField("price")
      resetField("inssurance")
      resetField("features")
      resetField("assurance")
      resetField("vehicleType")
      resetField("minAge")
      resetField("model")
      resetField("vehiclePlate")
      ConfirmModal()
    }catch(error){
      console.log(error)
    }   
}
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size='xl'
        aria-labelledby='contained-modal-title-vcenter'
        backdrop='static'
        centered
        className='addMotos'
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
              Crear una nueva moto
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='row'>
              <div className='col-md-4 d-flex flex-column align-items-center'>
             
              <label htmlFor="file-input">
                <i class="fa fa-cloud-upload upload-icon card-body"></i> 
                <input
                  id="file-input"
                  className="d-none"
                  type="file"
                  name="upload moto"
                  {...register("image", { require: false })}
                />
                </label>
                <div className='mb-2 mt-4'>
                  <div className='form-check mb-2'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='flexRadioDefault'
                      id='flexRadioDefault1'
                    />
                    <label className='form-check-label' for='flexRadioDefault1'>
                      Disponible
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='flexRadioDefault'
                      id='flexRadioDefault2'
                      checked
                    />
                    <label className='form-check-label' for='flexRadioDefault2'>
                      No Disponible
                    </label>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='mb-2'>
                  <label className='form-label login__label'>
                    Nombre de moto
                  </label>
                  <input
                    type='text'
                    className='form-control login__input'
                    {...register('name', { require: true })}
                  />
                </div>
                <div className='mb-2'>
                  <label className='form-label'>Cantidad de motos</label>
                  <input type='number' className='form-control' />
                </div>
                <div className='mb-2'>
                  <label className='form-label login__label'>
                    Edad mínima de conductor
                  </label>
                  <input
                    type='text'
                    className='form-control login__input'
                    {...register('minAge', { require: true })}
                  />
                </div>
                <div className='mb-2'>
                  <label className='form-label login__label'>
                    Depósito en garantia
                  </label>
                  <input
                    type='text'
                    className='form-control login__input'
                    {...register('securityHold', { require: true })}
                  />
                </div>
                <div className='mb-2'>
                  <label className='form-label login__label'>
                    No. Poliza de seguro
                  </label>
                  <input
                    type='text'
                    className='form-control login__input'
                    {...register('assurance', { require: true })}
                  />
                </div>
              </div>
              <div className='col-md-4'>
                <div className='mb-2'>
                  <label className='form-label login__label'>
                    No. de placas
                  </label>
                  <input
                    type='text'
                    className='form-control login__input'
                    {...register('vehiclePlate', { require: true })}
                  />
                </div>
                <div className='mb-2'>
                  <label className='form-label login__label'>
                    Modelo de moto
                  </label>
                  <input
                    type='text'
                    className='form-control login__input'
                    {...register('model', { require: true })}
                  />
                </div>
                <div className='mb-2'>
                  <label className='form-label login__label'>
                    Tipo de moto
                  </label>
                  <select className='form-select'>
                    <option value='' selected disabled>
                      -- Selecciona una opción
                    </option>
                    <option value='Scooter'>Scooter</option>
                    <option value='Moto'>Moto</option>
                    <option value='Bicicleta'>Bicicleta</option>
                  </select>
                </div>
                <div className='mb-2'>
                  <label className='form-label login__label'>
                    Precio por día
                  </label>
                  <input
                    type='text'
                    className='form-control login__input'
                    {...register('price', { require: true })}
                  />
                </div>
                <div className='mb-2'>
                  <label className='form-label login__label'>
                    Características
                  </label>
                  <select className='form-select'>
                    <option value='' selected disabled>
                      -- Selecciona las opciones --
                    </option>
                    <option value='Velocidad maxima 95 km/h'>
                      Velocidad máxima 95 km/h
                    </option>
                    <option value='Incluye 2 cascos por cada moto'>
                      Incluye 2 cascos por cada moto
                    </option>
                    <option value='Soporte 24/7'>Soporte 24/7</option>
                    <option value='Incluye una cadena de seguridad'>
                      Incluye una cadena de seguridad
                    </option>
                    <option value='Máximo confort para la movilidad urban'>
                      Máximo confort para la movilidad urbana
                    </option>
                  </select>
                </div>
              </div>
              <div className='col-md-4 offset-md-4 mt-4'>
                {edit && (
                  <div className='addMotos__available-date d-flex'>
                    <CustomDay />
                  </div>
                )}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className='mx-auto'>
              <Button
                className='btn btn-movebike outlined addMotos__btn addMotos__btn--cancel'
                onClick={handleClick}
              >
                Cancelar
              </Button>
              <Button
                type='submit'
                id='addMoto'
                className='btn btn-movebike contained addMotos__btn addMotos__btn--save'
                onClick={handleClick}
              >
                Guardar
              </Button>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}
