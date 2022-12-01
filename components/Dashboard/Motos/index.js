import React, { useState } from "react";
import dynamic from 'next/dynamic'
import MessageModal from "../../MessageModal";
import AddMoto from "./AddMoto";
import Image from "next/image";


const TableMotos = dynamic(
  () => import('./TableMotos'),
  { ssr: false } // <-- not including this component on server-side
)

export default function Motos() {
  const [addMoto, setAddMoto] = useState(false);
  const [success, setSuccess] = useState(false)
  const handleClickSuccess = () => {
    setAddMoto(false)
    setSuccess(true)
  }
  const handleCloseSuccess = () => setSuccess(false)
  const handleClose = () => setAddMoto(false);
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="dashboard__title">Inventario de motos</h1>
              <button
                className="btn btn-movebike contained"
                onClick={() => setAddMoto(true)}
              >
                <i className="fa-solid fa-plus me-2"></i>
                Agregar moto
              </button>
            </div>
            <div className="col-12">
              <TableMotos />
            </div>
          </div>
        </div>
      </section>

      <AddMoto
        edit={false}
        show={addMoto}
        handleClose={handleClose}
        handleClick={handleClickSuccess}
        onHide={() => setAddMoto(false)}
      />

      <MessageModal
        show={success}
        handleClose={handleCloseSuccess}
        handleClick={handleClickSuccess}
        success={true}
        msg='¡Tu moto ha sido creado scorrectamente!'
        onHide={() => setSuccess(false)}
      />
    </>
  );
}
