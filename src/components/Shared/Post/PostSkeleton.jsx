import React from "react";

const PostSkeleton = () => {
  return (
    <div className="max-w-full mx-auto my-4 overflow-hidden bg-white rounded-lg shadow-md">
      <div className="flex space-x-4">
        <div className="top-0 w-full h-full bg-gray-100 dark:bg-gray-800">
          <div className="flex">
            <div className="w-20 h-20 p-1 mt-2 ml-2 bg-gray-300 rounded-lg animate-pulse" />
            <div className="flex flex-col mt-4 ml-1">
              <div className="w-24 h-4 bg-gray-300 rounded animate-pulse" />
              <div className="w-20 h-3 mt-2 bg-gray-300 rounded animate-pulse" />
              <div className="w-12 h-2 mt-2 bg-gray-300 rounded animate-pulse" />
            </div>
          </div>

          <div className="flex flex-col p-2 pb-4 mt-2 space-y-2">
            <div className="w-full h-6 bg-gray-300 rounded animate-pulse" />
            <div className="w-4/5 h-5 bg-gray-300 rounded animate-pulse" />
            <div className="w-3/5 h-4 bg-gray-300 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSkeleton;
