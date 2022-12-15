import React from "react";

export default function CardAmount({ amount, title, icon }) {
  return (
    <div className="card-section card-analytics p-2 mb-3">
      <div className="d-flex flex-column justify-content-center">
        <div className="card-analytics__icon text-center mx-auto">
          {icon}
        </div>
        <div className="ms-1 d-flex flex-column">
        <p className="card-analytics__title mb-0">{title}</p>
        <h3 className="card-analytics__amount text-center">{amount}</h3>
        </div>
      </div>
    </div>
  );
}
