"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import SliderImage from "./SliderImage";
import { CarouselSliderRoot } from "../utils/endpoint/CarouselSlider";

const CarouselOne = () => {
  const [dataCarousel, setDataCarousel] = useState<CarouselSliderRoot>();
  const [pagination, setPagination] = useState<number>(0);

  const getDatCarousel = () => {
    axios
      .get("https://api.npoint.io/549aeee2359cf2c7ce77")
      .then((res) => setDataCarousel(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDatCarousel();
  }, []);

  const paginate = (direction: number) => {
    setPagination(pagination + direction);
  };

  const length = dataCarousel?.data?.length ?? 0;

  return (
    <>
      <div className="md:flex hidden items-center overflow-hidden ">
        <div className="flex items-center">
          {dataCarousel?.data.map((data, index) => {
            const isActive = index === pagination;
            return (
              <motion.div
                key={data.id}
                className="box-border w-[400px] h-[400px] flex relative"
                animate={{
                  opacity: index < pagination ? 0 : 1,
                  x: index - pagination * 400,
                  padding: isActive ? 0 : 32,
                  scale: isActive ? 1 : 0.9,
                }}
                transition={{ type: "spring", damping: 20 }}
              >
                <Image
                  src={data.image}
                  alt={data.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="hidden md:block">
        <button
          className="mt-10"
          onClick={() => paginate(-1)}
          disabled={pagination === 0}
        >
          {pagination === 0 ? (
            <IoArrowBackCircleOutline className="h-[100px] w-[100px] text-slate-200" />
          ) : (
            <IoArrowBackCircleOutline className="h-[100px] w-[100px] text-[#2f74a8]" />
          )}
        </button>
        <button
          className="mt-10"
          onClick={() => paginate(+1)}
          disabled={pagination === length - 1}
        >
          {pagination === length - 1 ? (
            <IoArrowForwardCircleOutline className="h-[100px] w-[100px] text-slate-200" />
          ) : (
            <IoArrowForwardCircleOutline className="h-[100px] w-[100px] text-[#2f74a8]" />
          )}
        </button>
      </div>

      <div className="md:hidden block">
        <SliderImage slides={dataCarousel?.data ?? []} />
      </div>
    </>
  );
};

export default CarouselOne;
