import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "../src/components/header";
import Nat1 from "../public/2.jpg";
import Nat2 from "../public/12.jpg";
import Nat5 from "../public/19.jpg";
import Nat6 from "../public/18.jpg";
import Nat7 from "../public/29.jpg";
import Nat3 from "../public/15.jpg";

const photos = [
  {
    src: Nat1,
    width: "50%",
    height: "70%",
    description: "The garden of Catherine palace.",
  },
  {
    src: Nat2,
    width: "50%",
    height: "70%",
    description: "The garden of Catherine palace.",
  },
  {
    src: Nat3,
    width: "50%",
    height: "70%",
    description: "Leaf of a Karelian pinetree.",
  },
  {
    src: Nat5,
    width: "50%",
    height: "70%",
    description: "The garden of Catherine palace.",
  },
  {
    src: Nat6,
    width: "65%",
    height: "35%",
    description: "Leaf of a Karelian pinetree.",
  },
  { src: Nat7, width: "70%", height: "45%", description: "Long exposure of a tree. Petzval mode lens." },
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

const Nature = () => {
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

export default Nature;
