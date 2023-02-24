import * as React from "react";
import {
  useCommentPostMutation,
  useLikePostMutation,
} from "features/postSlice/postApi";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import AddCommentSvg from "../Svg/AddCommentSvg";
import AddImageSvg from "../Svg/AddImageSvg";
import AddVideoSvg from "../Svg/AddVideoSvg";
import LoveReactSvg from "../Svg/LoveReactSvg";
import SaveSvg from "../Svg/SaveSvg";
import { formatter } from "utils/NumberFormatter";
import { useRef } from "react";
import { useGetProfileQuery } from "features/profile/profileApi";

export default function PostFooter({ data }) {
  const filePickerRef = useRef(null);
  const { postId, likes, comments } = data;
  const [isUserLiked, setIsUserLiked] = React.useState(false);

  const [handleLike, { isSuccess: isLikeSuccess }] = useLikePostMutation();
  const [handleAddComment, { isSuccess: isCommentSuccess }] =
    useCommentPostMutation();
  const { data: userData } = useGetProfileQuery();

  const [comment, setComment] = React.useState("");
  const [selectedImages, setSelectedImages] = React.useState([]);

  const handleSelect = (e, type) => {
    const files = e.target.files;
    if (type === "image") {
      setSelectedImages([...files]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment === "") return;
    const formData = new FormData();
    formData.append("title", comment);
    selectedImages.forEach((file) => formData.append("image", file));
    handleAddComment({ postId, formData });
  };

  React.useEffect(() => {
    if (isCommentSuccess) {
      setComment("");
      setSelectedImages([]);
    }
  }, [isCommentSuccess]);

  React.useEffect(() => {
    likes?.forEach((liker) => {
      if (liker.id === userData?.data?.user_id) {
        setIsUserLiked(true);
      }
    });
  }, [userData?.data?.user_id]);

  const removeImage = (index) => {
    const filteredImages = selectedImages.filter((_, idx) => index !== idx);

    setSelectedImages(filteredImages);
  };

  return (
    <>
      <div className="px-4 flex items-stretch gap-2">
        <ProfilePicture width={48} height={48} />

        <form
          onSubmit={handleSubmit}
          className="bg-[#F7F7F7] w-[100%] before:content-[''] before:absolute before:left-[66px] before:border-8 before:border-transparent before:border-solid before:border-r-[#F7F7F7] px-3 py-[4px] rounded-lg flex flex-1 items-center  gap-2 mx-2"
        >
          <input
            className="text-[#8F8F8F] bg-transparent text-[12px] w-[100%] border-none focus:ring-0"
            type="text"
            placeholder="Write your comment"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />

          <input
            type="file"
            hidden
            ref={filePickerRef}
            onChange={(e) => handleSelect(e, "image")}
          />

          {/* <AddVideoSvg /> */}

          <AddImageSvg onClick={() => filePickerRef.current.click()} />
        </form>

        <div className="flex items-start mt-[10px] gap-2">
          <div className="flex items-center gap-1">
            {isUserLiked ? (
              <svg
                onClick={() => handleLike(postId)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-red-600 hover:cursor-pointer"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            ) : (
              <LoveReactSvg onClick={() => handleLike(postId)} />
            )}
            <p className="text-sm text-[#000000]">{formatter(likes?.length)}</p>
          </div>

          <div className="flex items-center gap-2">
            <AddCommentSvg />
            <p className="text-[14px] text-[#000000]">
              {formatter(comments?.length)}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <SaveSvg />
          </div>
        </div>
      </div>

      <div className="flex items-center pl-[90px] gap-2 mt-3">
        {selectedImages?.map((file, index) => (
          <div key={index} className="relative">
            <img
              className="h-16 w-16 object-contain"
              src={URL.createObjectURL(file)}
              alt="Comment"
            />

            <button
              className="absolute font-bold text-xs -top-[3px] bg-red-200 h-6 w-6 p-1 rounded-full -right-1 text-red-600 cursor-pointer hover:bg-red-300"
              onClick={() => removeImage(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
