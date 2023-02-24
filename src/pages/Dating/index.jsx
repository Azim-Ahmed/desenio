import React from "react";
import SocialRightBar from "components/Home/SocialRightBar/SocialRightBar";
import SocialLeftBar from "components/Home/SocialLeftBar/SocialLeftBar";
import DatingCard from "components/Dating/DatingCard";
import { useGetHomeProfilesQuery } from "features/homepage/homeApi";

const Dating = () => {
  const { data, isFetching } = useGetHomeProfilesQuery();

  const loading = () =>
    isFetching && (
      <>
        {new Array(9).fill(1).map((_, idx) => (
          <DatingCardSkeleton />
        ))}
      </>
    );

  return (
    <div className={`bg-white text-black dark:bg-gray-800 dark:text-white`}>
      <div className="px-2 py-5">
        <div class="grid grid-cols-6 gap-4 relative">
          <div class="col-span-1 h-screen overflow-y-auto sticky top-0 ">
            <SocialLeftBar />
          </div>

          <div className="h-screen col-span-4 overflow-x-hidden overflow-y-auto middle-content scrollbar-hide ">
            <div className="grid grid-cols-12 gap-x-3 gap-y-4">
              {loading()}
              {data?.data?.map((person, idx) => (
                <DatingCard key={idx} person={person} id={idx + 1} />
              ))}
            </div>
          </div>

          <div class="col-span-1 h-screen overflow-y-auto sticky top-0">
            <SocialRightBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dating;

const DatingCardSkeleton = () => (
  <div className="col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-3 w-full h-64 rounded-lg relative bg-gray-500 animate-pulse">
    <div className="absolute top-5 right-0  p-2 rounded-tl-lg rounded-bl-lg w-20 h-7 bg-gray-300 animate-pulse" />

    <div className="absolute left-2 bottom-4 flex flex-col space-y-1 mb-5">
      <div className="w-28 h-4 rounded-lg bg-gray-300 animate-pulse" />
      <div className="w-24 h-3 rounded-lg bg-gray-300 animate-pulse" />
    </div>
  </div>
);
