"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HeroGalleryRoot } from "../utils/endpoint/HeroGalleryResource";
import axios from "axios";

const HeroGallery = () => {
  const [dataGallery, setDataGallery] = useState<HeroGalleryRoot>();

  const getDataGallery = () => {
    axios
      .get("https://api.npoint.io/832841a150c5afc537c6")
      .then((res) => setDataGallery(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDataGallery();
  }, []);

  return (
    <div className="flex flex-col md:flex-row md: flex-wrap">
      {dataGallery?.rows.map((row) => (
        <div key={row.id} className="md:ml-5 md:mt-0 mt-10 ">
          <div className="relative w-[20rem] h-[15rem] items-center">
            <Image
              src={row.imagesUrl}
              alt={row.alt}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg w-[320px] h-[240px]"
            />
          </div>
          <div className="mt-5">
            <p className="font-bold text-2xl w-[320px] text-center md:text-start">
              {row.title}
            </p>
          </div>
          <div>
            <p className="text-slate-500 text-center md:text-start">
              {row.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroGallery;
