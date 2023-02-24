import PostSkeleton from "components/Shared/Post/PostSkeleton";
import { useGetPostQuery } from "features/profile/profileApi";
import Post from "../Shared/Post/Post";

export default function Posts() {
  const { data: posts, isFetching: postsFetching } = useGetPostQuery();
  console.log("🚀 ~ file: Posts.jsx:7 ~ Posts ~ posts", posts);

  if (postsFetching) {
    return (
      <>
        {new Array(5).fill(0).map((_, index) => (
          <PostSkeleton key={index} />
        ))}
      </>
    );
  }

  if (posts?.data?.length === 0) {
    return "No Post Found.";
  }

  return (
    <div className="flex flex-col gap-4 py-4">
      {posts?.data?.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}
