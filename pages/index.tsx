import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
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
import { Modal } from "../src/components/Modal";
import { ImageDetail } from "../src/components/image-detail";

const Home: React.FunctionComponent = () => {
  let router = useRouter();
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
            <div className="mx-auto rounded-2xl hover:drop-shadow-[0_35px_35px_rgba(15,209,99,0.19)] w-[20rem] h-[20rem] m-2 relative overflow-hidden md:h-70 md:w-70">
              <Image src={Me} layout="fill" objectFit="cover" alt="" />
            </div>
          </div>
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
        <section className="py-5">
          <div>
            <h3 className="text-3xl text-center font-semibold">Portofolio</h3>
            <p className="text-xl py-2 leading-8 text-center text-gray-800 font-thin">
              Collection of my recent photos.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Link href="/[image]" as="/1">
                <a>
                  <Image
                    className="rounded-lg object-cover"
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
