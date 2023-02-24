import { useGetNewMeetMutation } from "features/meet/meetApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import g1 from "../../assets/images/g1.svg";
import g2 from "../../assets/images/g2.svg";
import g3 from "../../assets/images/g3.svg";
import "./Meet.css";

const settings = {
  dots: true,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const sliderItems = [
  {
    image: g1,
    title: "Get a link you can share",
    headText: "New Meeting",
    description:
      "Click to get a link you can send to people you want to meet with",
  },
  {
    image: g2,
    title: "Plan ahead",
    headText: "New Meeting",
    description:
      "Click to schedule to meetings in Google Calender and send invites to participants",
  },
  {
    image: g3,
    title: "Your meeting is safe",
    description:
      "No one can join a meeting unless invited or admitted by the host",
  },
];

const Meet = () => {
  const navigate = useNavigate();
  const [handleGetNewLink, { data, isSuccess, isLoading }] =
    useGetNewMeetMutation();
  useEffect(() => {
    if (!isSuccess) return;
    console.log(data.data.link);
    navigate(data.data.link);
  }, [isSuccess]);

  return (
    <div className="md:flex justify-between items-center w-screen h-screen px-6 py-8">
      {/* left-div meeting head text*/}
      <div className="md:w-[45%]">
        <h1 className="md:text-5xl sm:text-3xl">
          Premium video meetings. Now free for everyone.
        </h1>
        <p className="text-xl text-[#5f6368] mt-5 mb-12">
          We re-engineered the service we built for secure business meetings,
          Google Meet, to make it free and available for all.
        </p>

        <div className="md:flex sm:flex-wrap items-center gap-4">
          <div
            onClick={handleGetNewLink}
            className="bg-[#1a73e8] text-[#fff] rounded p-3 w-[160px] min-w-[150px] cursor-pointer"
          >
            {isLoading ? (
              "loading"
            ) : (
              <p className="md:text-sm sm:text-sm">
                <span>
                  <i class="fa-solid fa-video mr-2"></i>
                </span>
                New Meeting
              </p>
            )}
          </div>

          <div className="rounded sm:mt-4 md:mt-0 lg:mt-0">
            <form className={`w-[260px]`}>
              <label
                for="default-search"
                class="mb-2 md:text-sm sm:text-xl focus:border-blue-600 font-medium text-dark sr-only "
              >
                Enter a code or link
              </label>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <i class="fa-solid fa-keyboard  text-gray-600 text-sm "></i>
                </div>
                <input
                  type="search"
                  class=" block p-3 pl-10 text-sm  bg-white-100 rounded border focus:outline-none border-gray-300 focus:ring-blue-500 focus:border-blue-600 placeholder-gray-600 "
                  placeholder="Enter a code or link"
                />
              </div>
            </form>
          </div>
        </div>
        <hr className="mt-8 mb-5" />
        <p className="sm:mb-6">
          <a className="text-[#1a73e8]" href="#">
            Learn more
          </a>{" "}
          about google Meet
        </p>
      </div>

      {/* right-div-carousel */}
      <div className="grid md:grid-cols-1 sm:grid-cols-1 md:w-[45%] sm:w-[90%] mx-auto">
        <Slider {...settings}>
          {sliderItems.map((item) => (
            <div>
              <div>
                <img
                  className="mx-auto"
                  src={item.image}
                  alt="carousel image"
                />
              </div>
              <div className="md:w-96 sm:w-auto mx-auto">
                <h4 className="text-2xl text-dark text-center">{item.title}</h4>
                <p className="text-center">
                  {item?.description.slice(0, 6)}{" "}
                  <span className="font-bold">{item.headText}</span>{" "}
                  {item.description.slice(6, 150)}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Meet;
