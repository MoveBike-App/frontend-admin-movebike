import Image from "next/image";
import React, { useState, useEffect,useMemo } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CustomDay from "../General/CustomDay";
import { useForm } from "react-hook-form";
import FormData from "form-data";
import { editMoto } from "../../../services/motos/motos";

const myLoader = ({ src }) => {
  return `${src}`
}

export default function EditAMoto({
  edit = false,
  show,
  handleClose,
  handleClick,
  moto,
  refreshTable
}) {

  const [isEdit, setIsEdit] = useState(false);
    const updateDataList = ["name","vehiclePlate","totalReserves","model","minAge","securityHold","price","inssurance","image","vehicleType"]

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({
        defaultValues: useMemo(() => {
        return moto;
        }, [moto])
    });


    useEffect(() => {
      if (!moto) {
        moto = undefined;
        reset();
        setImgData(null);
        setIsEdit(false);
      } else {
        reset(moto);
        setIsEdit(true);
        if (moto.image) {
          setImgData(moto.image);
        }
      }
    }, [moto]);
  function getFormFromData(data){
    let bodyFormData = new FormData();
    for( const key of updateDataList ){
        if(data[key]){
            if(key==="image"){
                if(data[key].constructor.name === "FileList"){
                    bodyFormData.append(key, data[key][0]);
                }
            }else{
                bodyFormData.append(key, data[key]);
            }
        }
    }
    return bodyFormData;
  }

  async function  updateMoto (moto)  {
    const bodyFormData = getFormFromData(moto);
    const token = localStorage.getItem("token");

    try {
      const response = await editMoto(token, moto._id, bodyFormData);
      const jsonData = await response.json();
      if(jsonData.success){
        refreshTable(jsonData.data.moto);
      }
    } catch (error) {
    }
  }

  const onSubmit = (data) => {
    updateMoto(data);
  }

  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
 
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
        className="addMotos"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Editar {moto.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
             <div className="col-md-4 d-flex flex-column align-items-center">
                <label htmlFor="file-input">
                  <div className="flex">
                  <i class="fa fa-cloud-upload upload-icon card-body" />
                  <input
                    id="file-input"
                    className="d-none"
                    type="file"
                    name="upload moto"
                    {...register("image", {
                      require: false,
                      onChange: (e) => handleChange(e),
                    })}
                  />
                  <label htmlFor="file-input" className="mt-1">
                    Select file...
                  </label>
                  </div>
                  <div className="text-center">
                    {imgData
                    ? <Image
                    loader={myLoader}
                    src={imgData}
                    alt='moto img'
                    width={85}
                    height={85}
                  /> 
                  :''
                  }
                
                        </div>
                </label>
                <div className="mb-2 mt-4">
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Disponible
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                      No Disponible
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-2">
                  <label className="form-label login__label">
                    Nombre de moto
                  </label>
                  <input
                    type="text"
                    className="form-control login__input"
                    {...register("name", { require: true })}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label">Cantidad de motos</label>
                  <input
                    type="number"
                    className="form-control login__input"
                    {...register("totalReserves", { require: true })}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label login__label">
                    Edad mínima de conductor
                  </label>
                  <input
                    type="text"
                    className="form-control login__input"
                    {...register("minAge", { require: true })}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label login__label">
                    Depósito en garantia
                  </label>
                  <input
                    type="text"
                    className="form-control login__input"
                    name="securityHold"
                    {...register("securityHold", { require: true })}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label login__label">
                    No. Poliza de seguro
                  </label>
                  <input
                    type="text"
                    className="form-control login__input"
                    name="inssurance"
                    {...register("inssurance", { require: true })}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-2">
                  <label className="form-label login__label">
                    No. de placas
                  </label>
                  <input
                    type="text"
                    className="form-control login__input"
                    {...register("vehiclePlate", { require: true })}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label login__label">
                    Modelo de moto
                  </label>
                  <input
                    type="text"
                    className="form-control login__input"
                    {...register("model", { require: true })}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label login__label">
                    Tipo de moto
                  </label>
                  <select className="form-select"
                {...register('vehicleType', { require: true })}
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="scooter">Scooter</option>
                    <option value="moto">Moto</option>
                    <option value="bicicleta">Bicicleta</option>
                  </select>
                </div>
                <div className="mb-2">
                  <label className="form-label login__label">
                    Precio por día
                  </label>
                  <input
                    type="text"
                    className="form-control login__input"
                    {...register("price", { require: true })}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label login__label">
                    Características
                  </label>
                  <select className="form-select">
                    <option value="" selected disabled>
                      -- Selecciona las opciones --
                    </option>
                    <option value="Velocidad maxima 95 km/h">
                      Velocidad máxima 95 km/h
                    </option>
                    <option value="Incluye 2 cascos por cada moto">
                      Incluye 2 cascos por cada moto
                    </option>
                    <option value="Soporte 24/7">Soporte 24/7</option>
                    <option value="Incluye una cadena de seguridad">
                      Incluye una cadena de seguridad
                    </option>
                    <option value="Máximo confort para la movilidad urban">
                      Máximo confort para la movilidad urbana
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-4 offset-md-4 mt-4">
                {edit && (
                  <div className="addMotos__available-date d-flex">
                    <CustomDay />
                  </div>
                )}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="mx-auto">
              <Button
                className="btn btn-movebike outlined addMotos__btn addMotos__btn--cancel"
                onClick={handleClick}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                id="addMoto"
                className="btn btn-movebike contained addMotos__btn addMotos__btn--save"
                onClick={handleClick}
              >
                Guardar
              </Button>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
