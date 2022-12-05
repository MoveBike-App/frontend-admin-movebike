import Image from "next/image";
import React, { useState, useMemo, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CustomDay from "../General/CustomDay";
import { useForm } from "react-hook-form";
import FormData from "form-data";
import { createRoute } from "../../../services/routes/routes";
import { editRoute } from "../../../services/routes/routes";

export default function AddRoute({
  show,
  edit = false,
  handleClose,
  handleCloseEdit,
  route,
  refreshTable
}) {
  const updateDataList = [
    "title",
    "image",
    "description",
    "address",
    "city",
    "state",
    "ZIP",
  ];
  const [isEdit, setIsEdit] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: useMemo(() => {
        return route;
      }, [route])
  });

  useEffect(() => {
    if(!route){
        route = undefined
        reset()
        setImgData(null)
        setIsEdit(false)
    }else{
        reset(route);
        setIsEdit(true)
        if(route.image){
            setImgData(route.image)
        }
    }
  }, [route]);

 

  function getFormFromData(data) {
    let bodyFormData = new FormData();
    for (const key of updateDataList) {
      if (data[key]) {
        if (key === "image") {
          if (data[key].constructor.name === "FileList") {
            bodyFormData.append(key, data[key][0]);
          }
        } else {
          bodyFormData.append(key, data[key]);
        }
      }
    }
    return bodyFormData;
  }

  async function createOrUpdateOneRoute(routeData) {
    if(isEdit && !routeData._id){
        routeData = routeData.route
    }
    const bodyFormData = getFormFromData(routeData);
    const token = localStorage.getItem("token");

    try {
      let response;
      if (isEdit) {
        response = await editRoute(token, routeData._id, bodyFormData);
      } else {
        response = await createRoute(token, bodyFormData);
      }
      const jsonData = await response.json();
      if (jsonData.success) {
        if(isEdit){
            handleCloseEdit()
            refreshTable(jsonData.data.route);
        }else{
            setImgData(null)
            refreshTable(jsonData.data);
            handleClose()
            route = undefined
            reset()
        }
      }
    } catch (error) {}
  }

  const onSubmit = (data) => {
    createOrUpdateOneRoute(data);
  };

  const closeWindowForm = () =>{
    handleClose()
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
        onHide={()=>{closeWindowForm()}}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
        className="addMotos"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {isEdit ? "Editar ruta " : "Crear una nueva ruta"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row p-4">
              
              
              <div className="col-md-4">
                <div className="mb-2">
                  <label className="form-label login__label">Título</label>
                  <input
                    type="text"
                    className="form-control login__input"
                    {...register("title", { require: true })}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label login__label">Dirección</label>
                  <input
                    type="text"
                    className="form-control login__input"
                    {...register("address", { require: true })}
                  />
                </div>
               
                <div className="mb-2">
                  <label className="form-label login__label">Imagen</label>
                  <input
                    type="file"
                    className="form-control login__input"
                    {...register("image", { require: false, onChange: (e) => handleChange(e) })}
                  />
                  <img style={{width: "200px", margin:"auto", marginTop:18, marginBottom:-50, height: "auto", display: "flex"}} className="playerProfilePic_home_tile" src={imgData}  />
                </div>


              </div>
              <div className="col-md-4">
              <div className="mb-2">
                  <label className="form-label login__label">Ciudad</label>
                  <input
                    type="text"
                    className="form-control login__input"
                    {...register("city", { require: true })}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label login__label">Estado</label>
                  <input
                    type="text"
                    className="form-control login__input"
                    {...register("state", { require: true })}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label login__label">ZIP</label>
                  <input
                    type="text"
                    className="form-control login__input"
                    {...register("ZIP", { require: true })}
                  />
                </div>
                
          
              </div>
              <div className="col-md-4 d-flex flex-column align-items-center">
                <div className="col-12">
                {/* <label htmlFor="file-input">
                  <i class="fa fa-cloud-upload upload-icon card-body" />
                  <input
                    id="file-input"
                    className="d-none"
                    type="file"
                    name="upload moto"
                    {...register("image", { require: true })}
                  />
                </label> */}
                </div>
                <div className="col-12">
                <div className='col-auto'>
            <textarea
              name='user-message'
              id='contenido'
              cols='20'
              rows='10'
              className='form-control border-0'
              placeholder='Descripción de lugar turístico'
              {...register('description', { required: true })}
            />
          </div>
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
                onClick={()=>{
                        closeWindowForm()
                    }
                }
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                id="addMoto"
                className="btn btn-movebike contained addMotos__btn addMotos__btn--save"
                
                
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
