import React from "react";
import Head from "next/head";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import Me from "../public/meem.png";
import Image from "next/image";
import img1 from "../public/6.jpg";
import img2 from "../public/5.jpg";
import img4 from "../public/1.jpg";
import img5 from "../public/2.jpg";
import img6 from "../public/3.jpg";
import img7 from "../public/4.jpg";
import img8 from "../public/building.jpg";
import Mar1 from "../public/Marina1.jpg";
import Mar2 from "../public/Marina2.jpg";
import Mar3 from "../public/Marina3.jpg";
import Mar4 from "../public/Marina4.jpg";
import logo3 from "../public/logo3.svg";


const Home: React.FunctionComponent = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <div className="text-center p-5 py-10">
            <Image src={logo3} alt="" />
            <h3 className="text-3xl py-10 md:text-3xl font-semibold">
              Film photographer.
            </h3>
            <p className="text-sm py-4 text-gray-800 max-w-sm mx-auto md:text-xl font-thin">
              Portraits. Street photography. Nature photography.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-10 text-gray-600">
              <a
                href="https://www.instagram.com/katyathegreatest/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://twitter.com/Katheridze?t=GY6FZSadUY2dkij54Jsrwg&s=09"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillTwitterCircle />
              </a>
            </div>
            <div className="mx-auto rounded-2xl hover:drop-shadow-[0_35px_35px_rgba(15,209,99,0.19)] hover:transition-shadow hover:duration-500 w-60 h-60 my-1 relative overflow-hidden md:h-70 md:w-70">
              <Image src={Me} layout="fill" objectFit="cover" alt="" />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl text-center font-semibold">Portofolio</h3>
            <p className="text-xl py-2 leading-8 text-center text-gray-800 font-thin">
              Collection of my recent photos.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={img1}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={img2}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={img4}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={img5}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={img6}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={img7}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={Mar1}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={Mar2}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={Mar3}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={Mar4}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"110%"}
                height={"30%"}
                layout="responsive"
                src={img8}
                alt=""
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

