import PostSkeleton from "components/Shared/Post/PostSkeleton";
import Post from "components/Shared/Post/Post";
import {
  useGetHomeProfilesQuery,
  useHomePagePostQuery,
} from "features/homepage/homeApi";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import storyAdd1 from "../../assets/images/Mask-group.png";
import storyAdd2 from "../../assets/images/Mask-group1.png";
import storyAdd3 from "../../assets/images/Mask-group2.png";
import storyAdd4 from "../../assets/images/Mask-group3.png";
import storyAdd5 from "../../assets/images/Mask-group4.png";
import plusIcon from "../../assets/images/plus-icon.png";
import PostedStatusFive from "../../components/Home/PostedStatusFive/PostedStatusFive";
import PostedStatusFour from "../../components/Home/PostedStatusFour/PostedStatusFour";
import PostedStatusThree from "../../components/Home/PostedStatusThree/PostedStatusThree";
import PostedStatusTwo from "../../components/Home/PostedStatusTwo/PostedStatusTwo";
import PostStatus from "../../components/Home/PostStatus/PostStatus";
import ReelsSlider from "../../components/Home/ReelsSlider/ReelsSlider";
import SocialLeftBar from "../../components/Home/SocialLeftBar/SocialLeftBar";
import SocialRightBar from "../../components/Home/SocialRightBar/SocialRightBar";
import SocialStoryGallery from "../../components/Home/SocialStoryGallery/SocialStoryGallery";
import SuggestFriendSlider from "../../components/Home/SuggestFriendSlider/SuggestFriendSlider";
import "./Home.css";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const gallerySettings = {
  dots: false,
  infinite: false,
  arrows: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const storyGalleries = [
  {
    addedImage: storyAdd1,
    profileImage: plusIcon,
    name: "Add your story",
  },
  {
    addedImage: storyAdd2,
    profileImage: storyAdd2,
    name: "Janelliya will",
  },
  {
    addedImage: storyAdd3,
    profileImage: storyAdd3,
    name: "Janelliya will",
  },
  {
    addedImage: storyAdd4,
    profileImage: storyAdd4,
    name: "Janelliya will",
  },
  {
    addedImage: storyAdd5,
    profileImage: storyAdd5,
    name: "Janelliya will",
  },
];

const Home = () => {
  const { data, isFetching } = useGetHomeProfilesQuery();

  console.log("🚀 ~ file: Home.jsx:125 ~ Home ~ data", data);

  const { data: postData, isFetching: isPostDataFetching } =
    useHomePagePostQuery();

  return (
    <div
      className={`dark:bg-red bg-white text-black dark:bg-gray-800 dark:text-white`}
    >
      <div className="px-2 py-5">
        <div class="grid grid-cols-6 gap-4 relative">
          {/* ---left-side-bar-start--- */}
          <div class="col-span-1 h-screen overflow-y-auto sticky top-0 ">
            <SocialLeftBar />
          </div>
          {/* ---left-sidebar-end--- */}

          {/* ---main-content-start--- */}
          <div className="sticky top-0 h-screen col-span-4 overflow-x-hidden overflow-y-scroll middle-content scrollbar-hide">
            {/* story-gallery */}
            <div className="flex justify-end w-full pb-1 pr-3">
              <Link
                to="/stories"
                className="text-black  text-[16px] font-semibold dark:text-white"
              >
                see all
              </Link>
            </div>
            <Slider {...gallerySettings}>
              {storyGalleries.map((story) => (
                <SocialStoryGallery story={story} />
              ))}
            </Slider>

            {/* timeline-posted-status-part */}
            <PostStatus data={data} isFetching={isFetching} />

            {/* news-feeds-part */}
            {isPostDataFetching ? (
              <>
                {new Array(5).fill(0).map((_, index) => (
                  <PostSkeleton key={index} />
                ))}
              </>
            ) : (
              <>
                {postData?.data.length !== 0 && (
                  <div className="flex flex-col gap-4 py-4">
                    {postData?.data?.map((post, index) => (
                      <Post key={index} {...post} />
                    ))}
                  </div>
                )}
              </>
            )}

            {/* <PostedStatusOne /> */}

            {/* suggest-friend-slider */}
            <div className="bg-[#ffffff] p-4 mb-4 rounded-md">
              <h6 className="text-[16px] text-[#000000] mb-4">
                Suggest Friend
              </h6>
              {/* <div className="grid grid-cols-4 gap-2"> */}
              <Slider {...settings}>
                {data?.data?.map((friend, index) => (
                  <SuggestFriendSlider key={index} friend={friend} />
                ))}
              </Slider>
              {/* </div> */}
            </div>

            {/* reels-videos-sliders */}
            {/* <div className="bg-[#ffffff] p-4 mb-4 rounded-md">
              <h6 className="text-[16px] text-[#000000] mb-4">
                Viral and short videos
              </h6>
              <Slider {...settings}>
                {ReelVideos.map((reel) => (
                  <ReelsSlider reel={reel} />
                ))}
              </Slider>
            </div> */}

            <PostedStatusTwo />

            <PostedStatusThree />

            <PostedStatusFour />

            <PostedStatusFive />
          </div>

          {/* ---right-sidebar-part-start--- */}
          <div class="col-span-1 h-screen overflow-y-auto sticky top-0">
            <SocialRightBar />
          </div>
          {/* ---right-sidebar-part-end--- */}
        </div>
      </div>
    </div>
  );
};

export default Home;
