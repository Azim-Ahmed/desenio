import LiveCard from "components/LiveCard";
import SocialLeftBar from "components/Home/SocialLeftBar/SocialLeftBar";
import * as React from "react";
import styles from "./Stream.module.scss";
import bgImage from "assets/images/students-knowing-right-answer.png";

const randomId = () => {
  return Math.floor(Math.random() * 1000000);
};

const dataModel = {
  id: randomId(),
  status: "Live",
  countOfPeopleWatching: 100000,
  liveDuration: "11min",
  poster: bgImage,
  title: "How i take such cool photos. I would appreciate hearing your...",
  likes: 100000,
  shares: 100,
  userProfile: {
    name: "John Doe",
    profileImage: "https://picsum.photos/200",
    designation: "UI/UX Designer",
  },
};

const loadedItems = 8;

const Stream = () => {
  const [data, setData] = React.useState(new Array(100).fill(dataModel));
  const [numberOfElements, setNumberOfElements] = React.useState(loadedItems);

  const sliceData = data.slice(0, numberOfElements);

  const handleLoadMore = () => {
    if (sliceData.length < data.length) {
      setNumberOfElements(numberOfElements + loadedItems);
    }
  };

  return (
    <section className={`${styles.__wrapper}`}>
      <div className="mt-[75px] dark:bg-gray-900">
        <div className="px-4 py-6">
          <div class="grid grid-cols-6 gap-4 relative">
            <div class="col-span-1 h-screen overflow-y-auto sticky top-0 ">
              <SocialLeftBar />
            </div>

            <div className="col-span-5 overflow-y-auto scrollbar-hide">
              <div className="px-3 py-6 bg-white rounded-md shadow-lg dark:bg-gray-900">
                <h2 className="pb-4 text-2xl font-bold text-black dark:text-white">
                  Live Videos for You
                </h2>

                <div className="grid gap-4 grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {sliceData.map((el, i) => (
                    <LiveCard key={i} data={el} isLive />
                  ))}
                </div>

                {sliceData.length !== data.length && (
                  <div className="flex items-center justify-center mt-10">
                    <button
                      className="px-5 bg-black text-white py-3 rounded-lg hover:bg-gradient-to-r  hover:from-[#FFD700]  hover:to-[#DAA520]  transition duration-300"
                      onClick={handleLoadMore}
                    >
                      Load more
                    </button>
                  </div>
                )}
              </div>

              <div className="px-3 py-6 mt-5 bg-white rounded-md shadow-lg dark:bg-gray-900">
                <h2 className="pb-4 text-2xl font-bold text-black dark:text-white">
                  Recent Live Videos
                </h2>

                <div className="grid gap-4 grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {sliceData.map((el, i) => (
                    <LiveCard key={i} data={el} isLive={false} />
                  ))}
                </div>

                {sliceData.length !== data.length && (
                  <div className="flex items-center justify-center mt-10">
                    <button
                      className="px-5 bg-black text-white py-3 rounded-lg hover:bg-gradient-to-r  hover:from-[#FFD700]  hover:to-[#DAA520]  transition duration-300"
                      onClick={handleLoadMore}
                    >
                      Load more
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stream;
