import React, { useEffect, useState } from "react";
import { Grid, _ } from "gridjs-react";
import BookDetail from "../../Dashboard/Bookings/BookDetail";
import "gridjs/dist/theme/mermaid.css";
import Image from "next/image";
import { getAllReserves } from "/services/reserves/reserves";

const myLoader = ({ src }) => {
  return `${src}`;
};

export default function Bookings() {
  const [showReserve, setShowReserve] = useState(false);
  const [currentBookDetail, setCurrentBookDetail] = useState({});
  const handleClose = () => setShowReserve(false);

  const row = (reserves) =>
    reserves.map((reserva) => [
      reserva.vehicle["image"],
      reserva.reserveNumber,
      reserva.customer["email"],
      reserva.totalPrice,
      reserva.status,
      reserva.initialDate,
      reserva.finalDate,
      reserva
    ]);
  const [reserves, setReserves] = useState([]);
  const [pageSize, setPageSize] = React.useState(5);

  const getReserves = async () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("userCurrent");
    try {
      const response = await getAllReserves(token);
      const {
        data: { reserves },
      } = await response.json();
      setReserves(row(reserves));
    } catch (error) {}
  };

  useEffect(() => {
    getReserves();
  }, []);

  return (
    <main className="container-fluid bookings">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="bookings__title">Mis reservas</h1>
          </div>
          <div className="col-md-12 mx-auto">
            <div>
              <Grid
                data={reserves}
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
                  { id: "reserveNumber", name: "No. Reserva" },
                  { id: "customer", name: "Cliente" },
                  { id: "totalPrice", name: "Total" },
                  { id: "status", name: "Estado" },
                  { id: "initialDate", name: "Fecha Inicial" },
                  { id: "finalDate", name: "Fecha Fin" },
                  {
                    name: "Actions",
                    formatter: (cell) =>
                      _(
                        <div>
                          <button
                            className="btn"
                            onClick={() => {
                              setCurrentBookDetail(cell)
                              setShowReserve(true)
                            }}
                          >
                            <i class="fa fa-eye" aria-hidden="true"></i>
                          </button>
                        </div>
                      ),
                  },
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
      <BookDetail
        show={showReserve}
        edit={false}
        handleClose={handleClose}
        handleClick={handleClose}
        onHide={() => setShowReserve(false)}
        reserve={currentBookDetail}
      />
    </main>
  );
}
