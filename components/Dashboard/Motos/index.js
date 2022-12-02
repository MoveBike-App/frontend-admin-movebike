import React, { useState, useEffect, useRef } from "react";
import { Grid, _ } from "gridjs-react";
import Image from "next/image";
import { getAllMotos } from "/services/motos/motos";
import AddMoto from "./AddMoto";

const myLoader = ({ src }) => {
  return `${src}`;
};

export default function Motos() {
  const tableRef = useRef(null);
  const wrapperRef = useRef(null);
  //const [reserves, setReserves] = useState([]);

  const row = (motos) =>
    motos.map((moto) => [
      moto.image,
      moto.name,
      moto.vehicleType,
      moto.price,
      moto.vehiclePlate,
    ]);
  const [data, setData] = useState([]);

  const [pageSize, setPageSize] = React.useState(5);

  const getMotos = async () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("userCurrent");
    const { id, slug } = JSON.parse(user);
    try {
      const response = await getAllMotos(token);
      const { data: { motos }} = await response.json()
      setData(row(motos));
      const rows = [];
    } catch (error) {
    }
  };
  useEffect(() => {
    getMotos();
  }, []);
  const [addMoto, setAddMoto] = useState(false);
  const [success, setSuccess] = useState(false);
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
                <i className="fa-solid fa-plus me-2" />
                Agregar moto
              </button>
            </div>
            <div className="col-12 text-center">
              <div className="col-md-12 mx-auto">
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
                      { name: "Actions" },
                    ]}
                    search={true}
                    sort={true}
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
