import React from "react";
import UncontrolledExample from "./Corosel";
import Garis from "./Garis";

const Donat = () => {
  const data = JSON.parse(localStorage.getItem("user-info"));
  return (
    <>
      <div className="border_body">
        <Garis />
        <div className="border-coklat">
          <div className="text">
            Ini hadiah {data.Donate}nya buat kamu,maaf ya cuman berupa
            foto.makasih udah mau mampir
          </div>
        </div>
        <div className="border_gambar">
          <UncontrolledExample/>
        </div>
      </div>
    </>
  );
};

export default Donat;
