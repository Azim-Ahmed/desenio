import * as React from "react";

import { formatter } from "../../utils/NumberFormatter";

const LiveCard = ({ data, isLive = true }) => {
  const [loading, setLoading] = React.useState(true);

  const {
    poster,
    status,
    countOfPeopleWatching,
    liveDuration,
    title,
    likes,
    shares,
    userProfile: { name, profileImage, designation },
  } = data;

  return (
    <div className="col-span-1 cursor-pointer">
      <div className="relative flex items-center justify-center w-full min-h-full">
        <div className="flex flex-col items-start justify-start w-full h-auto overflow-hidden border rounded-lg shadow-lg dark:border-gray-800 dark:bg-gray-800">
          <div className="relative flex items-center justify-center w-full border-b dark:border-gray-800">
            <img
              alt="Forest"
              src={poster}
              width="1200"
              height="630"
              className={`w-full h-auto transition-opacity duration-200 ${
                loading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => {
                setLoading(false);
              }}
            />
            {loading && (
              <div className="absolute top-0 left-0 w-full h-full bg-gray-100 animate-pulse dark:bg-gray-900" />
            )}
          </div>

          {isLive && (
            <div className="absolute flex items-center justify-between w-full p-2">
              <div className="flex flex-col justify-between w-full h-full">
                <div className="flex items-center justify-start text-white">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center px-2 py-1 space-x-1 duration-200 bg-red-600 rounded-lg animate-pulse">
                        <span className="w-2 h-2 bg-white rounded-full" />
                        <p className="text-sm uppercase">{status}</p>
                      </div>

                      <div className="flex items-center space-x-1 font-bold text-white bg-[#0000007a] px-2 py-1 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>

                        <p className="text-xs">
                          {formatter(countOfPeopleWatching)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 font-bold text-white bg-[#0000007a] px-2 py-1 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <p className="text-xs">{liveDuration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="w-full px-1 py-3">
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-3">
                <div className="relative p-1 border border-dashed rounded-lg w-18 h-18">
                  <img
                    alt={name}
                    src={profileImage}
                    width="100"
                    height="100"
                    className={`w-full h-auto transition-opacity duration-200 rounded-lg ${
                      loading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={() => {
                      setLoading(false);
                    }}
                  />
                  {loading && (
                    <div className="absolute top-0 left-0 w-full h-full bg-gray-100 animate-pulse dark:bg-gray-900" />
                  )}
                </div>
              </div>
              <div class="col-span-9">
                <p className="text-black dark:text-gray-100 font-sm lg:font-lg xl:font-md">
                  {title}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-500 font-sm">
                  {designation}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-start mt-3 space-x-2">
              <div className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-gray-900 dark:text-gray-100"
                >
                  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                </svg>

                <p className="text-sm text-gray-900 dark:text-gray-100">
                  {formatter(likes)}
                </p>
              </div>

              <div className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-900 dark:text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>

                <p className="text-sm text-gray-900 dark:text-gray-100">
                  {formatter(shares)}
                </p>
              </div>

              <div className="flex items-center space-x-1">
                <span className="w-3 h-3 bg-[#FFD700] rounded-full" />
                <p className="text-[#FFD700]">2 minutes ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCard;
