import { REACT_APP_IMAGE_BASE_URL } from "urlConfig";
import Comment from "./Comment";
import PostAuthor from "./PostAuthor";
import PostContent from "./PostContent";
import PostDescription from "./PostDescription";
import PostFooter from "./PostFooter";

export default function Post({
  avatar,
  author,
  bio,
  title,
  comments,
  image,
  images,
  likes,
  privacy,
  updated_at,
  shares,
  tags,
  user_id,
  id,
  created_by,
  video,
  name,
  videos,
}) {
  return (
    <div className="py-4 bg-[#FFFFFF] rounded-md shadow-md dark:bg-gray-700 dark:border-2 dark:border-gray-300">
      <PostAuthor
        name={name}
        avatar={avatar}
        time={updated_at}
        title={title}
        id={user_id}
        postId={id}
        created_by={created_by}
      />
      <PostDescription title={title} />
      {images.length > 0 && (
        <>
          <PostContent images={images} />
        </>
      )}
      {videos.map((video) => (
        <video
          src={`${REACT_APP_IMAGE_BASE_URL}/posts/${video}`}
          className={"rounded-md mb-4 max-h-[70vh]"}
          controls
        />
      ))}
      <PostFooter data={{ postId: id, likes, comments }} />

      {comments.length !== 0 && (
        <div
          className={`flex flex-col mt-2 space-y-2 ${
            comments?.length > 4 ? "h-fit" : "h-32 overflow-auto"
          }`}
        >
          {comments?.map((comment, idx) => (
            <Comment {...comment} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
}
