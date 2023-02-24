import QuillText from "components/Reusable/QuillText";
import WritePost from "components/Shared/WritePost/WritePost";
import {
  useCreatePostMutation,
  useGetProfileQuery
} from "features/profile/profileApi";
import { useEffect, useState } from "react";
import PostModal from "./../../../components/Shared/Modal/PostModal";
import ProfilePicture from "./../../../components/Shared/ProfilePicture/ProfilePicture";
import ImageSvg from "./../../../components/Shared/Svg/ImageSvg";
import PollSvg from "./../../../components/Shared/Svg/PollSvg";
import VideoPlaySvg from "./../../../components/Shared/Svg/VideoPlaySvg";
import VideoSvg from "./../../../components/Shared/Svg/VideoSvg";

const PostStatus = () => {
  const { data, isFetching } = useGetProfileQuery();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [handleSubmit, { isSuccess, isLoading }] = useCreatePostMutation();

  const handlePost = (e) => {
    e.preventDefault();
    handleSubmit({ title: value });
  };

  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
      setValue("");
    }
  }, [isSuccess]);

  return (
    <div>
      {false && (
        <PostModal open={open} setOpen={setOpen}>
          <div className="relative w-3/4 md:w-1/2 px-3 pb-3 overflow-hidden bg-white rounded-lg shadow-xl ring-1 ring-gray-300 ring-opacity-50">
            <div className="flex py-4 items-center justify-center">
              <h2 className="text-2xl font-semibold  dark:text-black text-black">
                Create Post
              </h2>
            </div>

            <div className="flex items-start justify-start space-x-2 pb-3">
              <ProfilePicture
                data={data}
                isFetching={isFetching}
                width={60}
                height={60}
              />
              <div className="pt-2 flex-1">
                <h3 className="font-semibold text-xl text-black dark:text-white">
                  {data?.data.name || "username"}
                </h3>
              </div>
            </div>

            <form onSubmit={handlePost}>
              <input type="text" name="id" className="hidden" tabindex="-1" />

              <div className="w-full">
                <QuillText
                  value={value}
                  onChange={setValue}
                  placeholder="Tell your friend about your thoughts"
                />
                <div className="text-xs leading-6 text-red-700">
                  <p>
                    {value === "" && "Please write something before posting."}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end pt-6 space-x-4">
                <button
                  className="relative inline-flex items-center justify-center px-3 py-2 overflow-hidden text-sm font-medium leading-3 text-gray-700 transition-all duration-150 ease-in-out bg-white border rounded-lg shadow-sm outline-none focus:outline-none focus:ring-2 focus:ring-offset-2inline-flex focusRing border-black-300 hover:text-gray-500 selectionRing active:bg-gray-50 active:text-gray-800"
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>

                <button
                  className="relative inline-flex items-center justify-center px-3 py-2 overflow-hidden text-sm font-medium leading-3 transition-all duration-150 ease-in-out bg-black border rounded-md text-white shadow-sm outline-none focus:outline-none focus:ring-2 focus:ring-offset-2inline-flex focusRing border-black-300 hover:text-gray-300 selectionRing active:bg-gray-50 active:text-gray-800"
                  type="submit"
                  disabled={!value || isLoading}
                  style={{
                    cursor: !value || isLoading ? "not-allowed" : "pointer",
                  }}
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </PostModal>
      )}
      <WritePost open={open} onClose={() => setOpen(false)} />

      {/* timeline-post-part */}
      <div className="bg-[#FFFFFF] p-4 mb-4 rounded-md shadow-md">
        <div className="flex gap-2">
          <ProfilePicture
            data={data}
            isFetching={isFetching}
            width={50}
            height={50}
          />
          {/* <img
            className="w-[50px] h-[50px] rounded-lg"
            src={postTimeline}
            alt="user image"
          /> */}
          <div className="w-full">
            <input
              className="w-full h-[50px] min-h-[30px] outline-none border-transparent focus:border-transparent border-none focus:ring-0  px-4 bg-[#F2F2F2] placeholder:text-[#8F8F8F] placeholder:text-[14px] rounded-md dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              type="text"
              placeholder="Tell your friend about your thoughts"
              onClick={() => setOpen(true)}
            />

            <div className="flex items-center justify-between mt-4">
              <button
                onClick={() => setOpen(true)}
                className="btn btn-sm rounded-md bg-[#2E319221] border-none hover:bg-[#F7F7F7] focus:bg-[#F7F7F7] text-center w-[20%] text-[12px] normal-case"
              >
                <VideoSvg />
                <p className="ml-2 text-[#000000]">Live video</p>
              </button>
              <button
                onClick={() => setOpen(true)}
                className="btn btn-sm rounded-md bg-[#2E319221] border-none hover:bg-[#F7F7F7] focus:bg-[#F7F7F7] text-center  w-[20%] text-[12px] normal-case"
              >
                <ImageSvg />
                <p className="ml-2 text-[#000000]">Image</p>
              </button>
              <button
                onClick={() => setOpen(true)}
                className="btn btn-sm rounded-md bg-[#2E319221] border-none hover:bg-[#F7F7F7] focus:bg-[#F7F7F7] text-center w-[20%]  text-[12px] normal-case"
              >
                <VideoPlaySvg />
                <p className="ml-2 text-[#000000]">video</p>
              </button>
              <button
                onClick={() => setOpen(true)}
                className="btn btn-sm rounded-md bg-[#2E319221] border-none hover:bg-[#F7F7F7] focus:bg-[#F7F7F7] text-center  w-[20%] text-[12px] normal-case"
              >
                <PollSvg />
                <p className="ml-2 text-[#000000]">Poll</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostStatus;
