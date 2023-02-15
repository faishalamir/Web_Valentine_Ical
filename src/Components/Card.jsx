import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FakeLoading from "./FakeLoading";

// !! Import File

import Garis from "./Garis";
import NoData from "./NoData";

const Card = () => {
  const [Name, setName] = useState("");
  const [fakeLoading, setfakeLoading] = useState(false);
  const [messangeNoData, setmessangeNoData] = useState(true);
  const Navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    const AllSubmit = { Name };
    setfakeLoading(true);
    setmessangeNoData(false);

    // !! nyalakan pas online  https://jsonplaceholder.typicode.com/posts

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        AllSubmit,
      }),
    })
      .then(() => {
        setTimeout(() => {
          const data = JSON.parse(localStorage.getItem("user-info"));

          if (data) {
            setfakeLoading(false);
          }

          {
            data.Name.length > 0 ? Navigate("/Testing") : Navigate("/");
            setmessangeNoData(false);
          }
        }, 3000);
      })
      .catch((error) => console.error("eror  pak", error));

    localStorage.setItem("user-info", JSON.stringify(AllSubmit));
  };

  return (
    <>
      <div className="border_body">
        {fakeLoading && <FakeLoading />}
        <Garis />
        {!messangeNoData && <NoData />}
        <div
          data-aos-duration="3000"
          data-aos="fade-down"
          className="card_Form"
        >
          <h1 className="Name" style={{ lineHeight: "10vmax" }}>
            Hello,gua Faishal
          </h1>
          <div className="text_border">
            <h2 className="Text">
              Apakah kamu Mau Hadiah Dari Faishal? Kalau Mau Isi Input Nama
              Dibawah Ini Dulu
            </h2>
          </div>

          {/* !! form */}

          <div className="row">
            <div
              className="input-field col s6"
              style={{ marginTop: "5vmax", marginLeft: "10%" }}
            >
              <input
                onSubmit={Submit}
                style={{ width: "80%", backgroundColor: "none" }}
                autoComplete="off"
                name="Name"
                type="text"
                required
                value={Name}
                className="validate"
                onChange={(Name) => setName(Name.target.value)}
              />
              <label style={{ fontSize2: "2rem" }} className="active">
                Nama Kamu
              </label>
            </div>
          </div>
        </div>
        <a
          data-aos-duration="1000"
          data-aos="fade-down"
          onClick={Submit} 
          className="waves-effect waves-light btn-small"
          style={{
            marginLeft: "15vmax",
            width: "40%",
            height:'7vmax',
            lineHeight:'7vmax',
            borderRadius: "10px",
            fontFamily: "Roboto",
            fontSize: "1.1rem",
          }}
        >
          Kirim
        </a>
      </div>
    </>
  );
};

export default Card;
