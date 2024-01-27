"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import SliderImage from "./SliderImage";
import { CarouselSliderRoot } from "../utils/endpoint/CarouselSlider";

const CarouselVilla = () => {
  const [dataCarousel, setDataCarousel] = useState<CarouselSliderRoot>();
  const [pagination, setPagination] = useState<number>(0);

  const getDataCarousel = () => {
    axios
      .get("https://api.npoint.io/0061ef1333a1dad083eb")
      .then((res) => setDataCarousel(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDataCarousel();
  }, []);

  const paginate = (direction: number) => {
    setPagination(pagination + direction);
  };

  const length = dataCarousel?.data?.length ?? 0;

  return (
    <>
      <div className="flex items-center justify-between ml-9 md:pl-36 md:pr-36">
        <div>
          <h2 id="find_a_villa" className="text-3xl md:text-6xl">
            Our{" "}
            <span className="text-[#5590c8] font-semibold">
              Favorite Villas
            </span>
          </h2>
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
      </div>
      <div className="md:flex items-center overflow-hidden hidden">
        <div className="flex items-center">
          {dataCarousel?.data.map((row, index) => {
            const isActive = index === pagination;
            return (
              <motion.div
                key={row.id}
                className="box-border w-[600px] h-[400px] flex relative"
                animate={{
                  x: index - pagination * 200,
                  width: isActive ? 600 : 300,
                  margin: isActive ? 0 : 20,
                }}
                transition={{ type: "spring", damping: 20 }}
              >
                <Image
                  src={row.image}
                  alt="villa"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />

                <motion.div
                  animate={{
                    x: 350,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ ease: "linear", duration: 0.4 }}
                  className="mt-[330px]"
                >
                  <div className="bg-white/30 backdrop-blur-lg pl-5 pr-5 pt-3 pb-3 rounded-full">
                    <div className="z-10 text-white">
                      From <span className="font-semibold">{row.price}</span>/
                      <span className="text-xs tracking-widest">Night</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile */}
      <div className="mx-10 mt-5 md:hidden block">
        <SliderImage slides={dataCarousel?.data ?? []} />
      </div>
    </>
  );
};

export default CarouselVilla;
