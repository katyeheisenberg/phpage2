import Link from "next/link";
import { useRouter } from "next/router";
import { ImageDetail } from "../src/components/image-detail";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

export default function ImagePage() {
  let router = useRouter();
  let image = router.query.image;

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="max-w-sm rounded-lg overflow-hidden">
        <ImageDetail image={image} />
        <div className="m-4 p-5 flex justify-center">
          <Link href="/">
            <button className="bg-emerald-600 hover:bg-emerald-400 text-white font-bold py-3 px-5 border-b-4 border-emerald-700 hover:border-emerald-500 rounded">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

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
