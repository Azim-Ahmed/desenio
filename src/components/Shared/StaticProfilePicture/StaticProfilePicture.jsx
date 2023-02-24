import { REACT_APP_IMAGE_BASE_URL } from "urlConfig";
import postTimeline from "../../../assets/images/post-timeline.png";

export default function StaticProfilePicture({
  isLoading,
  src = "",
  width = 48,
  height = 48,
}) {
  if (isLoading)
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
        src={src ? `${REACT_APP_IMAGE_BASE_URL}/avatar/${src}` : postTimeline}
        alt="user"
      />
    </div>
  );
}
