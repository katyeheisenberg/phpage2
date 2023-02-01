/* eslint-disable react/jsx-no-target-blank */
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import Me from "../public/meem.png";
import Image from "next/image";
import img1 from "../public/6.jpg";
import img2 from "../public/5.jpg";
import img4 from "../public/1.jpg";
import img5 from "../public/2.jpg";
import img6 from "../public/3.jpg";
import img7 from "../public/4.JPG";
import img8 from "../public/building.jpg";
import Mar1 from "../public/Marina1.jpg";
import Mar2 from "../public/Marina2.jpg";
import Mar3 from "../public/Marina3.jpg";
import Mar4 from "../public/Marina4.jpg";
import logo3 from "../public/logo3.svg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 md:px-20 lg:px-40">
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
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://twitter.com/Katheridze?t=GY6FZSadUY2dkij54Jsrwg&s=09"
                target="_blank"
              >
                <AiFillTwitterCircle />
              </a>
            </div>
            <div className="mx-auto rounded-full w-60 h-60 relative overflow-hidden mt-10 md:h-70 md:w-70">
              <Image src={Me} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section className="py-1">
          <div>
            <h3 className="text-3xl text-center font-semibold">Portofolio</h3>
            <p className="text-xl py-2 leading-8 text-center text-gray-800 font-thin">
              Collection of my recent photos.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={img1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={img2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={img4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={img5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={img6}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={img7}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={Mar1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={Mar2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={Mar3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"80%"}
                height={"120%"}
                layout="responsive"
                src={Mar4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"110%"}
                height={"30%"}
                layout="responsive"
                src={img8}
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <section className="text-gray-700">
              <div className="px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-7">
                  <h1 className="sm:text-3xl font-thin mb-4 text-gray-900">
                    Contact Me
                  </h1>
                </div>
                <form className="flex flex-col gap-y-4">
                  <div className="flex gap-x-10">
                    <input
                      className="outline-none border-b border-b-primary h-[60px] bg-transparent w-full pl-3 placeholder:text-[#757879]"
                      type="text"
                      placeholder="Your name"
                    />
                    <input
                      className="outline-none border-b border-b-primary h-[60px] bg-transparent w-full pl-3 placeholder:text-[#757879]"
                      type="text"
                      placeholder="Your email address"
                    />
                  </div>
                  <input
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent w-full pl-3 placeholder:text-[#757879]"
                    type="text"
                    placeholder="Your message"
                  />
                  <button className="flex mx-auto text-white bg-cyan-700 border-0 py-3 my-7 px-8 focus:outline-none hover:bg-blue-400 rounded text-lg">
                    Send
                  </button>
                </form>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
