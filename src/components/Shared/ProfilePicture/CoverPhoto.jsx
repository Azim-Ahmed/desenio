import { useGetProfileQuery } from "features/profile/profileApi";
import { REACT_APP_IMAGE_BASE_URL } from 'urlConfig';

export default function CoverPhoto({ onClick, readonly }) {
  const { data, isFetching } = useGetProfileQuery();

  const handleClick = () => {
    if (readonly) return;
    onClick();
  };

  if (isFetching || !data?.data?.cover_photo)
    return (
      <div
        className={`absolute rounded-lg overflow-hidden bg-red-200 ${
          !readonly ? "cursor-pointer" : ""
        }`}
        style={{
          backgroundImage: `url("https://dummyimage.com/1110x308/000000/0011ff")`,
          backgroundSize: "cover",
          inset: 0,
        }}
        onClick={handleClick}
      />
    );

  return (
    <div
      className={`absolute rounded-lg overflow-hidden bg-red-200 ${
        !readonly ? "cursor-pointer" : ""
      }`}
      style={{
        backgroundImage: `url(${REACT_APP_IMAGE_BASE_URL}/cover_photo/${data.data.cover_photo})`,
        backgroundSize: "cover",
        inset: 0,
      }}
      onClick={handleClick}
    />
    //   <div style={{ width, height }} className="rounded-lg overflow-hidden bg-white">
    //     <img
    //       className="object-cover w-full h-full"
    //       src={`${process.env.REACT_APP_IMAGE_BASE_URL}/avatar/${data.data.avatar}`}
    //       alt="user image"
    //     />
    //   </div>
  );
}
