import React from "react";
import Garis from "./Garis";

const Eskrim = () => {
  const data = JSON.parse(localStorage.getItem("user-info"));
  return (
    <>
      <div className="border_body">
        <Garis />
        <div className="border-coklat">
          <div className="text">
            Ini hadiah {data.Eskrime}nya buat kamu,maaf ya cuman berupa
            foto.makasih udah mau mampir
          </div>
        </div>
        <div className="border_gambar"></div>
      </div>
    </>
  );
};

export default Eskrim;
