import Image from 'next/image'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import CustomDay from '../General/CustomDay'
const iconUpload = '/assets/icons/icon-upload.webp'

export default function AddMoto ({
  title,
  body,
  show,
  edit = false,
  setShow,
  handleClick,
  handleClose,
  handleShow
}) {
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
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Crear una nueva moto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-md-4 d-flex flex-column'>
              <button className='btn addMotos__upload'>
                <Image
                  src={iconUpload}
                  alt='Icon uploas'
                  width={95}
                  height={65}
                />
              </button>
              <label className='form-label mt-2'>Imagen de moto</label>
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
                <label className='form-label login__label'>Nombre de moto</label>
                <input type='text' className='form-control login__input' />
              </div>
              <div className='mb-2'>
                <label className='form-label'>Cantidad de motos</label>
                <input type='number' className='form-control' />
              </div>
              <div className='mb-2'>
                <label className='form-label login__label'>
                  Edad mínima de conductor
                </label>
                <input type='text' className='form-control login__input' />
              </div>
              <div className='mb-2'>
                <label className='form-label login__label'>
                  Depósito en garantia
                </label>
                <input type='text' className='form-control login__input' />
              </div>
              <div className='mb-2'>
                <label className='form-label login__label'>
                  No. Poliza de seguro
                </label>
                <input type='text' className='form-control login__input' />
              </div>
            </div>
            <div className='col-md-4'>
              <div className='mb-2'>
                <label className='form-label login__label'>No. de placas</label>
                <input type='text' className='form-control login__input' />
              </div>
              <div className='mb-2'>
                <label className='form-label login__label'>Modelo de moto</label>
                <input type='text' className='form-control login__input' />
              </div>
              <div className='mb-2'>
                <label className='form-label login__label'>Tipo de moto</label>
                <select className='form-select'>
                  <option value='' selected disabled>-- Selecciona una opción</option>
                  <option value='Scooter'>Scooter</option>
                  <option value='Moto'>Moto</option>
                  <option value='Bicicleta'>Bicicleta</option>
                </select>
              </div>
              <div className='mb-2'>
                <label className='form-label login__label'>Precio por día</label>
                <input type='text' className='form-control login__input' />
              </div>
              <div className='mb-2'>
                <label className='form-label login__label'>Caracteristicas</label>
                <select className='form-select'>
                  <option value='' selected disabled>-- Selecciona las opciones --</option>
                  <option value='Velocidad maxima 95 km/h'>
                    Velocidad maxima 95 km/h
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
            <Button className='btn btn-movebike contained addMotos__btn addMotos__btn--save' onClick={handleClick}>
              Guardar
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}
