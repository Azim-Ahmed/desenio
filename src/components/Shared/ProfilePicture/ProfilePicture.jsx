import { useGetProfileQuery } from 'features/profile/profileApi';
import { REACT_APP_IMAGE_BASE_URL } from 'urlConfig';
import postTimeline from "../../../assets/images/post-timeline.png";

export default function ProfilePicture({
  // data,
  // isFetching,
  width = 48,
  height = 48,
}) {
  const { data, isFetching } = useGetProfileQuery();
  if (isFetching || !data?.data?.avatar)
    return (
      <div
        style={{ width, height }}
        className="rounded-lg overflow-hidden bg-white"
      >
        <img
          className="object-cover w-full h-full"
          src={postTimeline}
          alt="user"
        />
      </div>
    );

  return (
    <div
      style={{ width, height }}
      className="rounded-lg overflow-hidden bg-white"
    >
      <img
        className="object-contain w-full h-full"
        loading="lazy"
        src={`${REACT_APP_IMAGE_BASE_URL}/avatar/${data.data.avatar}`}
        alt="user"
      />
    </div>
  );
}
