import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { SiTelegram, SiInstagram } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Me from "../public/meem.png";
import Image from "next/image";
import img1 from "../public/1.jpg";
import img2 from "../public/2.jpg";
import img3 from "../public/3.jpg";
import img4 from "../public/4.jpg";
import img5 from "../public/5.jpg";
import img6 from "../public/6.jpg";
import img11 from "../public/11.jpg";
import img7 from "../public/7.jpg";
import img8 from "../public/8.jpg";
import img9 from "../public/9.jpg";
import img10 from "../public/10.jpg";
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
  let router = useRouter();
  return (
    <div className="relative w-full h-screen">
      <Head>
        <title>katyathegreatest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <motion.div
            className="text-center p-5 py-10"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6 }}
          >
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
              className="mx-auto rounded-lg w-60 h-60 relative overflow-hidden mt-10 md:h-70 md:w-70"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image src={Me} layout="fill" objectFit="cover" alt="" />
            </motion.div>
          </motion.div>
        </section>
        {router.query.image && (
          <Modal
            onClose={() => {
              router.push("/");
            }}
          >
            <ImageDetail image={router.query.image} />
          </Modal>
        )}
        <section className="py-5" ref={ref}>
          <motion.div animate={animation}>
            <h3 className="text-3xl text-center font-semibold">Portofolio</h3>
            <p className="text-xl py-2 leading-8 text-center text-gray-800 font-thin">
              Collection of my recent photos.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"
            animate={animation}
          >
            <div className="basis-1/3 flex-1">
              <Link href="/[image]" as="/1">
                <a>
                  <Image
                    className="rounded-lg object-cover sm:w-[80%] sm:h-[120%]"
                    width="80%"
                    height="120%"
                    layout="responsive"
                    src={img1}
                    alt=""
                    loading="lazy"
                    placeholder="blur"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
              <Link href="/[image]" as="/2">
                <a>
                  <Image
                    className="rounded-lg object-cover"
                    width="80%"
                    height="120%"
                    layout="responsive"
                    src={img2}
                    alt=""
                    loading="lazy"
                    placeholder="blur"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
              <Link href="/[image]" as="/3">
                <a>
                  <Image
                    className="rounded-lg object-cover"
                    width="80%"
                    height="120%"
                    layout="responsive"
                    src={img3}
                    alt=""
                    loading="lazy"
                    placeholder="blur"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
              <Link href="/[image]" as="/4">
                <a>
                  <Image
                    className="rounded-lg object-cover"
                    width="80%"
                    height="120%"
                    layout="responsive"
                    src={img4}
                    alt=""
                    loading="lazy"
                    placeholder="blur"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
              <Link href="/[image]" as="/5">
                <a>
                  <Image
                    className="rounded-lg object-cover"
                    width="80%"
                    height="120%"
                    layout="responsive"
                    src={img5}
                    alt=""
                    loading="lazy"
                    placeholder="blur"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
              <Link href="/[image]" as="/6">
                <a>
                  <Image
                    className="rounded-lg object-cover"
                    width="80%"
                    height="120%"
                    layout="responsive"
                    src={img6}
                    alt=""
                    loading="lazy"
                    placeholder="blur"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
              <Link href="/[image]" as="/7">
                <a>
                  <Image
                    className="rounded-lg object-cover"
                    width="80%"
                    height="120%"
                    layout="responsive"
                    src={img7}
                    alt=""
                    loading="lazy"
                    placeholder="blur"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
              <Link href="/[image]" as="/8">
                <a>
                  <Image
                    className="rounded-lg object-cover"
                    width="80%"
                    height="120%"
                    layout="responsive"
                    src={img8}
                    alt=""
                    loading="lazy"
                    placeholder="blur"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
              <Link href="/[image]" as="/9">
                <a>
                  <Image
                    className="rounded-lg object-cover"
                    width="80%"
                    height="120%"
                    layout="responsive"
                    src={img9}
                    alt=""
                    loading="lazy"
                    placeholder="blur"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
              <Link href="/[image]" as="/10">
                <a>
                  <Image
                    className="rounded-lg object-cover"
                    width="80%"
                    height="120%"
                    layout="responsive"
                    src={img10}
                    alt=""
                    loading="lazy"
                    placeholder="blur"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/3 flex-1">
              <Link href="/[image]" as="/11">
                <a>
                  <Image
                    className="rounded-lg object-cover"
                    width="110%"
                    height="30%"
                    layout="responsive"
                    src={img11}
                    alt=""
                    loading="lazy"
                    placeholder="blur"
                  />
                </a>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Home;
