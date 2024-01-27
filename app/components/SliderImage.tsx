import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { CarouselSliderChild } from "../utils/endpoint/CarouselSlider";

interface SliderProps {
  slides?: CarouselSliderChild[];
}

const SliderImage: React.FC<SliderProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides?.map((slide) => (
        <div className="relative h-[300px] w-full" key={slide.id}>
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      ))}
    </Slider>
  );
};

export default SliderImage;
