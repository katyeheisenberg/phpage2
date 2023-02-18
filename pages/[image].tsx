import Link from "next/link";
import { useRouter } from "next/router";
import { ImageDetail } from "../src/components/image-detail";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

export default function ImagePage() {
  let router = useRouter();
  let image = router.query.image;

  return (
    <div className="relative w-screen h-screen">
      <Link href="/">
        <a className="relative z-20 flex items-center w-1/2 pt-12 mx-auto text-xl text-gray hover:text-blue">
          <BackIcon className="w-5 h-5 mr-2" />
          Back
        </a>
      </Link>

      <div className="absolute inset-0 flex items-center justify-center rounded-lg object-cover">
        <div>
          <div className="w-[30vw] h-[70%]">
            <ImageDetail image={image} />
          </div>
        </div>
      </div>
    </div>
  );
}

// export function getStaticPaths() {
//   return {
//     paths: [
//       { params: { image: "1" } },
//       { params: { image: "2" } },
//       { params: { image: "3" } },
//       { params: { image: "4" } },
//       { params: { image: "5" } },
//       { params: { image: "6" } },
//     ],
//     fallback: "blocking",
//   };
// }
export const getStaticPaths: GetStaticPaths = () => {
   return {
     paths: [
       { params: { image: "1" } },
       { params: { image: "2" } },
       { params: { image: "3" } },
       { params: { image: "4" } },
       { params: { image: "5" } },
       { params: { image: "6" } },
     ],
     fallback: "blocking",
   };
};

export const getStaticProps: GetStaticProps = (context) => {
  return {
    props: {
      image: context.params.image,
    },
  };
};

// export function getStaticProps(context) {
//   return {
//     props: {
//       image: context.params.image,
//     },
//   };
// }

function BackIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
}
