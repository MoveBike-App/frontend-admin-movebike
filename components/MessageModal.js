import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from 'next/image'
import React from 'react'

export default function MessageModal({show, msg, success, setShow, handleClick, handleClose}) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>
        <div className="row">
          <div className="col-12 text-center">
            {success ? (
              <Image
                className="mx-auto text-center"
                src={"/assets/icons/icon-check-thanks.webp"}
                alt={"Icon check"}
                width={80}
                height={80}
              />
            ) : (
              <Image
                className="mx-auto text-center"
                src={"/assets/icons/icon-error-msg.webp"}
                alt={"Icon check"}
                width={80}
                height={80}
              />
            )}

            <h4 className="mt-4 mb-4">{msg}</h4>
            <button
              onClick={handleClick}
              className="btn btn-movebike contained btn-ok"
            >
              OK
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
