import React, { useState, useEffect} from "react";
import { Grid, _, h } from "gridjs-react";
import Image from "next/image";
import { getAllMotos } from "/services/motos/motos";
import AddMoto from "./AddMoto";
import { deleteMoto } from '/services/motos/motos'
import ConfirmModal from "../../ConfirmModal";

const myLoader = ({ src }) => {
  return `${src}`;
};

export default function Motos() {
  
  const [data, setData] = useState([]);  
  const [addMoto, setAddMoto] = useState(false);
  const handleClose = () => setAddMoto(false);
  
  let hideCloseConfirm;

  const setHandleClosed = (handleClosed) => {
    hideCloseConfirm = handleClosed
  }

  const transformDataToRow = (motos) =>
    motos.map((moto) => [
      moto.image,
      moto.name,
      moto.vehicleType,
      moto.price,
      moto.vehiclePlate,
      moto._id
  ]);

  const getMotos = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await getAllMotos(token);
      const {
        data: { motos },
      } = await response.json();
      setData(transformDataToRow(motos));
    } catch (error) {}
  };
  useEffect(() => {
    getMotos();
  }, []);

  const handleDelete = async (del) => {
    const token = localStorage.getItem('token')
    try {
      const response = await deleteMoto(token, del)
      const dataJson = await response.json()
      if (dataJson.success === true) {
        setData(data.filter(m => m[5] !== del));
        hideCloseConfirm()
      }
    } catch (error) {}
  }

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
                <i className="fa-solid fa-plus me-2" />
                Agregar moto
              </button>
            </div>
            <div className="col-12 text-center">
              <div className="col-md-12 motos-table">
                <div>
                  <Grid
                    data={data}
                    columns={[
                      {
                        id: "image",
                        name: "Imagen",
                        formatter: (cell) =>
                          _(
                            <Image
                              loader={myLoader}
                              src={`${cell}`}
                              alt="moto img"
                              width={80}
                              height={80}
                            />
                          ),
                      },
                      { id: "name", name: "Vehículo" },
                      { id: "vehicleType", name: "Categoría" },
                      { id: "price", name: "Precio por día" },
                      { id: "vehiclePlate", name: "Placas" },
                      {
                        id:"id", name: "Actions",
                        formatter: (cell) =>
                          _(
                            
                             <ConfirmModal modalConfig={{
                                question: '¿Desea eliminar una moto?',
                                yes: 'Sí',
                                no: 'No',
                                button: 'iconTrash',
                                callback: () =>{ 
                                  handleDelete(cell)
                                },
                                setCloseFunction: (func) =>{ 
                                  setHandleClosed(func)
                                }
                              }} 
                            /> 
                          ),
                      },
                    ]}
                    search
                    sort
                    pagination={{
                      enabled: true,
                      limit: 10,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AddMoto
        edit={false}
        show={addMoto}
        handleClose={handleClose}
        handleClick={handleClose}
        onHide={() => setAddMoto(false)}
      />
    </>
  );
}
