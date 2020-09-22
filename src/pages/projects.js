import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import Carousel from 'react-bootstrap/Carousel';

import slide1 from "../images/profile.jpg"

export default () => {
  return (

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="this is the first slide"
        />
        {/* <Carousel.Caption>
          <h3>First Slide label</h3>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="this is the first slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
