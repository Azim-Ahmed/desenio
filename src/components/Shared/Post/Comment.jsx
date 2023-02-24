import { Menu, Transition } from "@headlessui/react";
import { useDeleteCommentFromPostMutation } from "features/postSlice/postApi";
import { useGetProfileQuery } from "features/profile/profileApi";
import { Fragment } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { REACT_APP_IMAGE_BASE_URL } from "urlConfig";
import StaticProfilePicture from "../StaticProfilePicture/StaticProfilePicture";

const Comment = (props) => {
  const { data, isFetching } = useGetProfileQuery();
  const { created_at, image, title, id, user_avatar, user_id, user_name } =
    props;
  const [handleDeleteComment] = useDeleteCommentFromPostMutation();

  return (
    <div className="px-4 flex items-stretch gap-2">
      <StaticProfilePicture width={35} height={35} src={user_avatar} />

      <div className="flex-1 pt-1">
        <Link
          to={data?.data?.user_id === user_id ? "/profile" : `/user/${user_id}`}
        >
          <span className="font-bold">{user_name}</span>
        </Link>
        <div className="bg-gray-100 rounded-md p-1 w-max">
          <p className="text-sm text-gray-900 dark:text-gray-50 ">{title}</p>
          {image && (
            <img
              src={`${REACT_APP_IMAGE_BASE_URL}/comments/${image}`}
              className="h-16 mt-1 w-16 object-contain"
              alt={image}
            />
          )}
        </div>

        <p className="text-2xs text-[#8F8F8F]">
          {<Moment fromNow>{new Date(created_at)}</Moment>}
        </p>
      </div>

      {!isFetching && data.data.user_id === user_id && (
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="flex items-center justify-center gap-1 cursor-pointer h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600">
            <span className="w-[3px] h-[3px] rounded-full bg-gray-600 dark:bg-gray-200"></span>
            <span className="w-[3px] h-[3px] rounded-full bg-gray-600 dark:bg-gray-200"></span>
            <span className="w-[3px] h-[3px] rounded-full bg-gray-600 dark:bg-gray-200"></span>
          </Menu.Button>

          <div className="absolute z-50 w-40 mr-10 right-0 -top-2">
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-24 mt-2 overflow-hidden origin-top-right bg-white border border-gray-100 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform opacity-100 scale-100 dark:bg-gray-700">
                <Menu.Item>
                  <button className="w-full group flex items-center px-3 py-1.5 space-x-2 text-sm hover:bg-gray-100 focus:bg-gray-100 capitalize dark:hover:bg-gray-600">
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
                    <span>Edit</span>
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button
                    className="w-full group flex items-center px-3 py-1.5 space-x-2 text-sm hover:bg-gray-100 focus:bg-gray-100 capitalize dark:hover:bg-gray-600"
                    onClick={() => handleDeleteComment(id)}
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
          </div>
        </Menu>
      )}
    </div>
  );
};

export default Comment;
