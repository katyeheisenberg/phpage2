import React from 'react'
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
            src={Mar1}
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
            src={Mar2}
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
            src={Mar3}
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
            src={Mar4}
            alt=""
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="basis-1/3 flex-1 hover:scale-110 hover:transform-all duration-700">
          <Image
            className="rounded-lg object-cover sm:w-[80%] sm:h-[120%]"
            width="60%"
            height="60%"
            layout="responsive"
            src={Ant1}
            alt=""
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="basis-1/3 flex-1 hover:scale-110 hover:transform-all duration-700">
          <Image
            className="rounded-lg object-cover sm:w-[80%] sm:h-[120%]"
            width="60%"
            height="60%"
            layout="responsive"
            src={Ant2}
            alt=""
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="basis-1/3 flex-1 hover:scale-110 hover:transform-all duration-700">
          <Image
            className="rounded-lg object-cover sm:w-[80%] sm:h-[120%]"
            width="60%"
            height="60%"
            layout="responsive"
            src={Ant3}
            alt=""
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="basis-1/3 flex-1 hover:scale-110 hover:transform-all duration-700">
          <Image
            className="rounded-lg object-cover sm:w-[80%] sm:h-[120%]"
            width="60%"
            height="60%"
            layout="responsive"
            src={Ant4}
            alt=""
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="basis-1/3 flex-1 hover:scale-110 hover:transform-all duration-700">
          <Image
            className="rounded-lg object-cover sm:w-[80%] sm:h-[120%]"
            width="60%"
            height="60%"
            layout="responsive"
            src={Ant5}
            alt=""
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="basis-1/3 flex-1 hover:scale-110 hover:transform-all duration-700">
          <Image
            className="rounded-lg object-cover sm:w-[80%] sm:h-[120%]"
            width="60%"
            height="60%"
            layout="responsive"
            src={Ant6}
            alt=""
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="basis-1/3 flex-1 hover:scale-110 hover:transform-all duration-700">
          <Image
            className="rounded-lg object-cover sm:w-[80%] sm:h-[120%]"
            width="60%"
            height="60%"
            layout="responsive"
            src={Ant7}
            alt=""
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="basis-1/3 flex-1 hover:scale-110 hover:transform-all duration-700">
          <Image
            className="rounded-lg object-cover sm:w-[80%] sm:h-[120%]"
            width="60%"
            height="60%"
            layout="responsive"
            src={Ant8}
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
