import Head from "next/head";
import Link from "next/link";
import { SiTelegram, SiInstagram } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Me from "../public/meem.png";
import Image from "next/image";
import img2 from "../public/2.jpg";
import img11 from "../public/11.jpg";
import img9 from "../public/9.jpg";
import logo3 from "../public/logo3.svg";
import { Modal } from "../src/components/modal";
import { ImageDetail } from "../src/components/image-detail";

const Home: React.FunctionComponent = () => {
  const { ref, inView } = useInView({
    threshold: 0.05,
  });

  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.4,
          bounce: 0.2,
        },
      });
    }

    if (!inView) {
      animation.start({
        x: "-100vw",
        transition: {
          duration: 1.4,
        },
      });
    }
  }, [inView]);

  return (
    <div className="relative w-full h-screen">
      <Head>
        <title>katyathegreatest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 md:px-10 lg:px-40">
        <section className="min-h-screen min-w-screen">
          <motion.div
            className="text-center py-10"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={logo3} alt="" />
            <h3 className="text-3xl py-10 md:text-3xl">Film photographer.</h3>
            <p className="text-sm py-4 text-gray-800 max-w-sm mx-auto md:text-xl font-thin">
              Portraits. Street photography. Nature photography.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-10 text-gray-600">
              <a
                href="https://www.instagram.com/katyathegreatest/"
                target="_blank"
                rel="noreferrer"
              >
                <SiInstagram />
              </a>
              <a
                href="https://t.me/oneonetwofour"
                target="_blank"
                rel="noreferrer"
              >
                <SiTelegram />
              </a>
            </div>
            <motion.div
              className="flex justify-center"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="relative w-[20rem] h-[20rem]">
                <Image
                  src={Me}
                  layout="fill"
                  className="rounded-lg object-cover"
                  width="30vw"
                  alt=""
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="py-5" ref={ref}>
          <motion.div animate={animation} className="pb-5">
            <h3 className="text-3xl text-center">Collection of my photos</h3>
          </motion.div>

          <motion.div
            className="flex flex-col gap-10 py-[3rem] lg:flex-row lg:flex-wrap"
            animate={animation}
          >
            <div className="basis-1/3 flex-1 h-100">
              <div className="max-w border rounded-lg relative cursor-pointer">
                <Link href="/portraits">
                  <div className="blur">
                    <Image
                      className="rounded-lg object-cover"
                      width="80%"
                      height="60%"
                      layout="responsive"
                      src={img9}
                      alt=""
                      loading="lazy"
                      placeholder="blur"
                    />
                  </div>
                </Link>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <h5 className="mb-2 text-3xl tracking-tight text-center text-white font-light">
                    Portraits
                  </h5>
                </div>
              </div>
            </div>

            <div className="basis-1/3 flex-1 h-100">
              <div className="max-w border rounded-lg relative cursor-pointer">
                <Link href="/nature">
                  <div className="blur">
                    <Image
                      className="rounded-lg object-cover"
                      width="80%"
                      height="60%"
                      layout="responsive"
                      src={img2}
                      alt=""
                      loading="lazy"
                      placeholder="blur"
                    />
                  </div>
                </Link>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <h5 className="mb-2 text-3xl tracking-tight text-center text-white font-light">
                    Nature
                  </h5>
                </div>
              </div>
            </div>

            <div className="basis-1/3 flex-1 h-100">
              <div className="max-w border rounded-lg relative cursor-pointer">
                <Link href="/street">
                  <div className="blur">
                    <Image
                      className="rounded-lg object-cover"
                      width="80%"
                      height="20%"
                      layout="responsive"
                      src={img11}
                      alt=""
                      loading="lazy"
                      placeholder="blur"
                    />
                  </div>
                </Link>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <h5 className="mb-2 text-3xl tracking-tight text-center text-white font-light">
                    Street
                  </h5>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <section className="w-full">
          <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ">
            <span className="text-sm text-gray-500 sm:text-center">
              @ Katyathegreatest. E-mail: katyathegreatest@yandex.ru
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
              <li>
                <div className="mr-4 p-1 border rounded-sm hover:bg-red-500 hover:text-white md:mr-6 ">
                  M
                </div>
              </li>
              <li>
                <div className="mr-4 p-1 border rounded-sm hover:bg-amber-500 hover:text-white md:mr-6 ">
                  e
                </div>
              </li>
              <li>
                <div className="mr-4 p-1 border rounded-sm hover:bg-yellow-300 hover:text-white md:mr-6 ">
                  e
                </div>
              </li>
              <li>
                <div className="mr-4 p-1 border rounded-sm hover:bg-emerald-500 hover:text-white md:mr-6 ">
                  o
                </div>
              </li>
              <li>
                <div className="mr-4 p-1 border rounded-sm hover:bg-sky-500 hover:text-white md:mr-6 ">
                  w
                </div>
              </li>
            </ul>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default Home;
