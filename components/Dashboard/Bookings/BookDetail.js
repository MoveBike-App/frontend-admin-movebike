import Image from "next/image";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CustomDay from "../General/CustomDay";
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
  reserve
}) {

  
  return (
    <>
    <Modal
      onHide={handleClose}
      show={show}
      size="xl"
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
        <hr />
        <section className="bookDetail">
          <div className="row">
            <div className="col-lg-6">
              <div className="col-12">
                <h5>Detalles de reserva</h5>
                <p>Joe Doe</p>
                <p>Cancún</p>
                <p>Hotel Riu Palace, Mexico</p>
              </div>
              <div className="col-12">
              <h5>Detalles de reserva</h5>
                <p>Joe Doe</p>
              </div>
            </div>
            <div className="col-lg-6">
            <div className="col-12">3</div>
              <div className="col-12">4</div>
            </div>
          </div>
        </section>
      </Modal.Body>
      <Modal.Footer>
        <div className="mx-auto">
          <hr />
          <Button className="btn btn-movebike contained addMotos__btn addMotos__btn--save" onClick={handleClick}>
            Guardar
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
    </>
  );
}
