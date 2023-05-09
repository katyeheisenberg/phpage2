import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "../src/components/header";
import str1 from "../public/1.jpg";
import str2 from "../public/3.jpg";
import str3 from "../public/4.jpg";
import str4 from "../public/6.jpg";
import str5 from "../public/11.jpg";
import str7 from "../public/14.jpg";
import str9 from "../public/16.jpg";
import str6 from "../public/13.jpg";
import str8 from "../public/17.jpg";

const photos = [
  {
    src: str1,
    width: "40%",
    height: "60%",
    description: "Lazarevsky Bridge.",
  },
  {
    src: str2,
    width: "40%",
    height: "60%",
    description: "New Year deer.",
  },
  {
    src: str3,
    width: "40%",
    height: "60%",
    description: "New Year nutcracker.",
  },
  {
    src: str4,
    width: "40%",
    height: "60%",
    description: "Big city's mushrooms.",
  },
  {
    src: str9,
    width: "40%",
    height: "60%",
    description: "St.Peresburg at night.",
  },
  {
    src: str6,
    width: "40%",
    height: "60%",
    description: "Runners.",
  },
  {
    src: str7,
    width: "40%",
    height: "60%",
    description: "The proccess.",
  },
  {
    src: str8,
    width: "40%",
    height: "60%",
    description: "Casual passerby.",
  },
  {
    src: str5,
    width: "80%",
    height: "20%",
    description: "Columns.",
  },
];

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



const street = () => {
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

export default street;

