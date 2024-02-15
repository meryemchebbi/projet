import React from 'react'
import { Carousel } from 'react-bootstrap';
import a from "../../assets/s1.avif";
import b from "../../assets/s2.avif";
import c from "../../assets/s3.jpg";

const Banniere = () => {
  return (
    <div>
      
      <Carousel>
        <Carousel.Item>
          <img
            style={{ width: '450px', height: '350px' }}
            className="d-block w-100"
            src={a}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: '450px', height: '350px' }}
            className="d-block w-100"
            src={b}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: '450px', height: '350px' }}
            className="d-block w-100"
            src={c}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      
    </div>
  )
}

export default Banniere
