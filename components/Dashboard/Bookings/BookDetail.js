import Image from "next/image";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CustomDay from "../General/CustomDay";
import BookedCategory from "./BookedCategory";
const iconUpload = "/assets/icons/icon-upload.webp";

export default function BookDetail({
  title,
  body,
  show,
  edit,
  setShow,
  handleClick,
  handleClose,
  handleShow,
  reserve,
}) {
  return (
    <>
      <Modal
        onHide={handleClose}
        show={show}
        size="l"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop={"static"}
        centered
        className="BookDetail"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Reserva #{reserve._id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="bookDetail me-3 ms-3 text-center text-md-start">
            <div class="row">
              <div class="col-md-6 col-xs-12 mb-2">
                <h6>Detalles de reserva</h6>
                <p class="mb-0">Joe Doe</p>
                <p class="mb-0">Cancún</p>
                <p>Hotel Riu Palace, Mexico</p>
              </div>
              <div class="col-md-6 col-xs-12 mb-3">
                <h6>Pagó por </h6>
                <p class="mb-0">Credit Card/Debit Card</p>
                <p class="mb-0">(ch_3568fkf598fkkfn268jdjdD)</p>
              </div>
              <div class="d-none d-xs-block  d-sm-block mt-3"></div>
              <div class="col-md-6 col-xs-12 mb-2 ">
                <h6>Email</h6>
                <p>joedoe.2569@yahoo.com</p>
              </div>
              <div class="col-md-6 col-xs-12 mb-2">
                <h6>Teléfono</h6>
                <p>+52 598-562-5625</p>
              </div>
            </div>
            <hr className="me-0 ms-0" />
            <section className="row ">
              <div className="col-md-5 text-center text-md-start">
                <h6>Producto</h6>
                <BookedCategory
                title='Nombre'
                description='Scooter Sport 150'
                />
                <BookedCategory
                title='Fecha inicio:'
                description='01/20/2022'
                />
                 <BookedCategory
                title='Fecha fin:'
                description='03/20/2022'
                />
               <BookedCategory
                title='Días:'
                description='2'
                />
                <BookedCategory
                title='Lugar:'
                description='Cancún, Quintana Roo'
                />
          </div>
              <div className="col-md-3 text-center">
                <h6>Cantidad</h6>
                <h5 className="mt-3">1</h5>
              </div>
              <div className="col-md-4 text-center">
                <h6>Total</h6>
                <h5 className="mt-3">$5000.00</h5>
              </div>
            </section>
          </section>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
        <div className="m-3 mx-auto">
          <Button
            className="btn btn-movebike contained ms-2 mb-3 align-items-center"
            onClick={handleClick}
          >
            En camino
          </Button>
        </div>
      </Modal>
    </>
  );
}
