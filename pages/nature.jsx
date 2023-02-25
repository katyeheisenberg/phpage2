import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "../src/components/header";
import Nat1 from "../public/2.jpg";
import Nat2 from "../public/12.jpg";


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
          <button className="bg-emerald-600 hover:bg-emerald-400 text-white font-bold py-3 px-5 border-b-4 border-emerald-700 hover:border-emerald-500 rounded hover:scale-110 hover:transform-all duration-200">
            Back
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-20 py-[3rem] lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 hover:scale-110 hover:transform-all duration-700">
          <Image
            className="rounded-lg object-cover sm:w-[80%] sm:h-[120%]"
            width="50%"
            height="70%"
            layout="responsive"
            src={Nat1}
            alt=""
            loading="lazy"
            placeholder="blur"
          />
        </div>

        <div className="basis-1/3 flex-1 hover:scale-110 hover:transform-all duration-700">
          <Image
            className="rounded-lg object-cover sm:w-[80%] sm:h-[120%]"
            width="50%"
            height="70%"
            layout="responsive"
            src={Nat2}
            alt=""
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default portraits;
