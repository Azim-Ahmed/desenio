import { Menu, Transition } from "@headlessui/react";
import QuillText from "components/Reusable/QuillText";
import {
  useDeletePostMutation,
  useGetProfileQuery,
  useUpdatePostMutation
} from "features/profile/profileApi";
import { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Moment from "react-moment";
import YellowPoint from "../../../components/Shared/Svg/YellowPoint";
import PostModal from "../Modal/PostModal";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import StaticProfilePicture from "../StaticProfilePicture/StaticProfilePicture";

export default function PostAuthor(props) {
  const {
    avatar = "",
    name = "User",
    subtitle = "Software Engineer",
    time = "1 hr ago",
    title,
    id,
    postId,
    created_by,
  } = props;
  const [open, setOpen] = useState(false);
  const { data } = useGetProfileQuery();
  const [value, setValue] = useState(title || "");
  const [handleSubmit, { isSuccess, isLoading, error, isError }] =
    useUpdatePostMutation();

  const [handleDelete, { isError: isDeleteError }] = useDeletePostMutation();

  const handlePost = (e) => {
    e.preventDefault();
    handleSubmit({
      id,
      title: value,
    });
  };

  if (isDeleteError) {
    toast.error("Something went wrong.");
  }

  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
      setValue("");
    }
  }, [isSuccess]);

  return (
    <div className="px-4 flex items-center gap-2 mb-4">
      <PostModal open={open} setOpen={setOpen}>
        <div className="relative w-3/4 px-3 pb-3 overflow-hidden bg-white rounded-lg shadow-xl md:w-1/2 ring-1 ring-gray-300 ring-opacity-50">
          <div className="flex items-center justify-center py-4">
            <h2 className="text-2xl font-semibold text-black dark:text-black">
              Update Post
            </h2>
          </div>
          <div className="flex items-start justify-start pb-3 space-x-2">
            <ProfilePicture width={60} height={60} />
            <div className="flex-1 pt-2">
              <h3 className="text-xl font-semibold text-black dark:text-white">
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
              {isError && (
                <div className="text-xs leading-6 text-red-700">
                  <p>{JSON.stringify(error)}</p>
                </div>
              )}
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
                className={` ${
                  isLoading && "animate-pulse"
                } relative inline-flex items-center justify-center px-3 py-2 overflow-hidden text-sm font-medium leading-3 transition-all duration-150 ease-in-out bg-black border rounded-md text-white shadow-sm outline-none focus:outline-none focus:ring-2 focus:ring-offset-2inline-flex focusRing border-black-300 hover:text-gray-300 selectionRing active:bg-gray-50 active:text-gray-800`}
                type="submit"
                disabled={!value || isLoading}
                style={{
                  cursor: !value || isLoading ? "not-allowed" : "pointer",
                }}
              >
                {isLoading ? "Updating..." : "Update"}
              </button>
            </div>
          </form>
        </div>
      </PostModal>

      <StaticProfilePicture src={avatar} width={60} height={60} />
      {/* <img className="w-[50px] h-[50px] rounded-lg" src={image} alt={name} /> */}
      <div className="flex flex-grow gap-2 flex-center">
        <div className="flex flex-col gap-1">
          <h6 className="text-[#000000] dark:text-white font-semibold text-[16px]">
            {name}
          </h6>
          <p className="text-[#8F8F8F] dark:text-gray-200 text-[12px] mr-6">
            {subtitle}
          </p>

          <div className="flex items-center gap-1">
            <YellowPoint />
            <span className="font-semibold text-gray-600 dark:text-gray-300 text-2xs">
              <Moment fromNow>{time}</Moment>
            </span>
          </div>
        </div>
      </div>

      <Menu
        as="div"
        className="relative inline-block text-left"
        style={{
          display: data?.data.id === created_by ? "block" : "none",
        }}
      >
        <Menu.Button className="flex items-center justify-center gap-1 cursor-pointer h-[40px] w-[40px] rounded-full hover:bg-gray-100 dark:hover:bg-gray-600">
          <span className="w-[5px] h-[5px] rounded-full bg-gray-600 dark:bg-gray-200"></span>
          <span className="w-[5px] h-[5px] rounded-full bg-gray-600 dark:bg-gray-200"></span>
          <span className="w-[5px] h-[5px] rounded-full bg-gray-600 dark:bg-gray-200"></span>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right overflow-hidden min-w-[120px] absolute z-10 right-0 mt-1 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none transform opacity-100 scale-100 dark:bg-gray-700">
            <Menu.Item>
              <button
                className="w-full group flex items-center px-3 py-1.5 space-x-2 text-sm hover:bg-gray-100 focus:bg-gray-100 capitalize dark:hover:bg-gray-600"
                onClick={() => setOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 text-gray-500 dark:text-gray-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>{" "}
                <span>update</span>
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                onClick={() => handleDelete(postId)}
                className="w-full group flex items-center px-3 py-1.5 space-x-2 text-sm hover:bg-gray-100 focus:bg-gray-100 capitalize dark:hover:bg-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-gray-500 dark:text-gray-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>{" "}
                <span>delete</span>
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
