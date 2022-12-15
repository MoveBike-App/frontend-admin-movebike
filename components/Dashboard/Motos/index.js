import React, { useState, useEffect } from 'react'
import { Grid, _, h } from 'gridjs-react'
import Image from 'next/image'
import { getAllMotos, deleteMoto } from '../../../services/motos/motos'
import AddMoto from '../Motos/AddMoto'
import ConfirmModal from '../../ConfirmModal'
import EditMoto from './EditMoto'

const myLoader = ({ src }) => {
  return `${src}`
}

export default function Motos () {
  const [data, setData] = useState([])
  const [motos, setMotos] = useState([])
  const [addMoto, setAddMoto] = useState(false)
  const [editMoto, setShowEditMoto] = useState(false)
  const [currentMoto, setCurrentMoto] = useState({})
  const handleClose = () => setAddMoto(false)
  const handleCloseEdit = () => setShowEditMoto(false)
  const handleClickSuccess = () => setAddMoto(false)

  let hideCloseConfirm

  const setHandleClosed = (handleClosed) => {
    hideCloseConfirm = handleClosed
  }

  const transformDataToRow = (motos) =>
    motos.map((moto) => [
      moto.image,
      moto.name,
      moto.vehicleType,
      `$ ${moto.price}`,
      moto.model,
      moto.vehiclePlate,
      moto,
      moto._id
    ]).reverse()

  const getMotos = async () => {
    const token = localStorage.getItem('token')
    try {
      const response = await getAllMotos(token)
      const {
        data: { motos }
      } = await response.json()
      setData(transformDataToRow(motos))
      setMotos(motos)
    } catch (error) {}
  }
  useEffect(() => {
    getMotos()
  }, [])

  const refreshTable = (moto) => {
    for (let i = 0; i < motos.length; i++) {
      if (motos[i]._id === moto._id) {
        motos[i] = moto
        setMotos(motos)
        setData(transformDataToRow(motos))
        return
      }
    }
    motos[motos.length] = moto
    setMotos(motos)
    setData(transformDataToRow(motos))
  }

  const handleDelete = async (del) => {
    const token = localStorage.getItem('token')
    try {
      const response = await deleteMoto(token, del)
      const dataJson = await response.json()
      if (dataJson.success === true) {
        const newMotos = motos.filter((m) => m._id !== del)
        setMotos(newMotos)
        setData(transformDataToRow(newMotos))
        hideCloseConfirm()
      }
    } catch (error) {}
  }

  return (
    <>
      <section className='container-fluid card-section pt-1 pb-5 bookings'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1 className='dashboard__title'>Inventario de motos</h1>
              <button
                className='btn btn-movebike contained'
                onClick={() => setAddMoto(true)}
              >
                <i className='fa-solid fa-plus me-2' />
                Agregar moto
              </button>
            </div>
            <div className='col-12 text-center'>
              <div className='col-md-12 motos-table'>
                <div>
                  <Grid
                    data={data}
                    columns={[
                      {
                        id: 'image',
                        name: 'Imagen',
                        formatter: (cell) =>
                          _(
                            <Image
                              loader={myLoader}
                              src={`${cell}`}
                              alt='moto img'
                              width={80}
                              height={80}
                            />
                          )
                      },
                      { id: 'name', name: 'Vehículo' },
                      { id: 'vehicleType', name: 'Categoría' },
                      { id: 'price', name: 'Precio/día' },
                      { id: 'model', name: 'Modelo' },
                      { id: 'vehiclePlate', name: 'Placas' },
                      {
                        id: 'id',
                        name: 'Actions',
                        formatter: (cell) =>
                          _(
                            <div className='text-center'>
                              <button
                                className='btn btn-movebike border-0 crud-icons'
                                onClick={() => {
                                  setCurrentMoto(cell)
                                  setShowEditMoto(true)
                                }}
                              >
                                <i
                                  className='fa fa-xl btn fa-edit edit-icon border-0'
                                  /*  onClick={handleShow} */
                                />
                              </button>

                              <ConfirmModal
                                modalConfig={{
                                  question: '¿Desea eliminar una moto?',
                                  yes: 'Sí',
                                  no: 'No',
                                  button: 'iconTrash',
                                  callback: () => {
                                    handleDelete(cell._id)
                                  },
                                  setCloseFunction: (func) => {
                                    setHandleClosed(func)
                                  }
                                }}
                              />
                            </div>
                          )
                      }
                    ]}
                    search
                    sort
                    pagination={{
                      enabled: true,
                      limit: 10
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EditMoto
        edit={false}
        show={editMoto}
        handleClose={handleCloseEdit}
        handleClick={handleCloseEdit}
        onHide={() => setShowEditMoto(false)}
        moto={currentMoto}
        refreshTable={refreshTable}
      />
      <AddMoto
        edit={false}
        show={addMoto}
        handleClose={handleClose}
        handleClick={handleClickSuccess}
        onHide={() => setAddMoto(false)}
        refreshTable={refreshTable}
      />
    </>
  )
}
