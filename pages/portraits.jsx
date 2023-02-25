import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../src/components/header';
import Footer from "../src/components/footer";
import Mar1 from "../public/7.jpg";
import Mar2 from "../public/8.jpg";
import Mar3 from "../public/9.jpg";
import Mar4 from "../public/10.jpg";

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
          <button className="bg-emerald-600 hover:bg-emerald-400 text-white font-bold py-3 px-5 border-b-4 border-emerald-700 hover:border-emerald-500 rounded">
            Back
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-10 py-[3rem] lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover sm:w-[80%] sm:h-[120%]"
            width="80%"
            height="120%"
            layout="responsive"
            src={Mar1}
            alt=""
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover sm:w-[80%] sm:h-[120%]"
            width="80%"
            height="120%"
            layout="responsive"
            src={Mar2}
            alt=""
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover sm:w-[80%] sm:h-[120%]"
            width="80%"
            height="120%"
            layout="responsive"
            src={Mar3}
            alt=""
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            className="rounded-lg object-cover sm:w-[80%] sm:h-[120%]"
            width="80%"
            height="120%"
            layout="responsive"
            src={Mar4}
            alt=""
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default portraits
