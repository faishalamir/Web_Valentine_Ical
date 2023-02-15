import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Garis from "./Garis";

const Coklat = () => {
    const data = JSON.parse(localStorage.getItem('user-info'))

  return (
    <>
     <div className="border_body">
        <Garis/>
        <div className="border-coklat">
            <div className="text">

            Ini hadiah {data.coklate}nya buat kamu,maaf ya cuman berupa foto.makasih udah mau mampir
            </div>
        </div>
        <div className="border_gambar">
        <Carousel style={{zIndex:'4',display:'inline-block'}}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100" style={{zIndex:'5'}}
          src='https://i.pinimg.com/236x/88/5d/68/885d68dddbcd87aed6a48b8989ea8b57.jpg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/236x/37/3d/57/373d57eb646af5194b02c201168d0502.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        </div>
    </>
  )
}

export default Coklat