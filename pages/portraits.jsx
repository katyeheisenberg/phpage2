import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../src/components/header';
import Mar1 from "../public/7.jpg";
import Mar2 from "../public/8.jpg";
import Mar3 from "../public/9.jpg";
import Mar4 from "../public/10.jpg";
import Ant1 from "../public/20.jpg";
import Ant2 from "../public/21.jpg";
import Ant3 from "../public/22.jpg";
import Ant4 from "../public/23.jpg";
import Ant5 from "../public/24.jpg";
import Ant6 from "../public/25.jpg";
import Ant7 from "../public/27.jpg";
import Ant8 from "../public/28.jpg";


const Photo = ({ src, width, height, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div
      className="relative basis-1/3 flex-1 hover:scale-110 hover:transform-all duration-700"
      onClick={handleClick}
    >
      <Image
        className={`rounded-lg object-cover sm:w-[80%] sm:h-[120%] ${
          showDescription ? "blur-[10px]" : ""
        } transition-all duration-300 ease-in-out`}
        width={width}
        height={height}
        layout="responsive"
        src={src}
        alt=""
        loading="lazy"
      />
      {showDescription && (
        <div className="absolute inset-0 flex items-center justify-center p-4 overflow-hidden">
          <dev className="text-center text-white font-light text-sm max-w-lg mx-auto overflow-auto">
            {description}
          </dev>
          <style jsx>{`
            ::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

  const photos = [
    { src: Ant1, width: "40%", height: "40%", description: "Anton." },
    { src: Ant2, width: "40%", height: "40%", description: "Anton." },
    { src: Ant3, width: "40%", height: "40%", description: "Anton." },
    { src: Ant4, width: "40%", height: "40%", description: "Anton." },
    { src: Ant5, width: "40%", height: "40%", description: "Anton." },
    { src: Ant6, width: "40%", height: "40%", description: "Anton." },
    { src: Ant7, width: "40%", height: "40%", description: "Anton." },
    { src: Ant8, width: "40%", height: "40%", description: "Anton." },
    { src: Mar1, width: "40%", height: "60%", description: "Marina." },
    { src: Mar2, width: "40%", height: "60%", description: "Marina." },
    { src: Mar3, width: "40%", height: "60%", description: "Marina." },
    { src: Mar4, width: "40%", height: "60%", description: "Marina." },
  ];

const portraits = () => {
  return (
    <motion.div
      className="px-10 md:px-10 lg:px-40"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Header />
      <div className="m-4 p-5 flex justify-center">
        <Link href="/">
          <button className="bg-emerald-600 hover:bg-emerald-400 text-white font-bold py-2 px-4 border-b-4 border-emerald-700 hover:border-emerald-500 rounded hover:scale-110 hover:transform-all duration-200">
            Back
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-20 py-[3rem] lg:flex-row lg:flex-wrap">
        {photos.map((photo, index) => (
          <Photo key={index} {...photo} />
        ))}
      </div>
    </motion.div>
  );
};

export default portraits;
