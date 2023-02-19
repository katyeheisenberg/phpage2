export function ImageDetail({ image }) {
  return (
    <img
      src={`/${image}.jpg`}
      className="object-cover rounded-lg h-[66vh] w-full"
    />
  );
}
