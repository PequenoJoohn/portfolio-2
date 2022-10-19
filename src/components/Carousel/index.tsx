import React, { useEffect, useState } from "react";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import { Container, SliderComponent } from "./styles";
import { CarouselProps } from "../../utils/interfaces";

const Carousel = ({ children }: CarouselProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "120px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerPadding: "180px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 414,
        settings: {
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <Container>
      <SliderComponent {...settings}>{children}</SliderComponent>
    </Container>
  );
};

export default Carousel;
