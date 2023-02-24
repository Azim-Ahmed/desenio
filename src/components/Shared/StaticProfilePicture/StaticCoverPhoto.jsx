import { REACT_APP_IMAGE_BASE_URL } from "urlConfig";

export default function StaticCoverPhoto({ src, isLoading }) {
  if (isLoading)
    return (
      <div
        className={`absolute rounded-lg overflow-hidden bg-red-200`}
        style={{
          backgroundImage: `url("https://dummyimage.com/1110x308/000000/0011ff")`,
          backgroundSize: "cover",
          inset: 0,
        }}
      />
    );

  return (
    <div
      className={`absolute rounded-lg overflow-hidden bg-red-200`}
      style={{
        backgroundImage: `url(${REACT_APP_IMAGE_BASE_URL}/cover_photo/${src})`,
        backgroundSize: "cover",
        inset: 0,
      }}
    />
  );
}
