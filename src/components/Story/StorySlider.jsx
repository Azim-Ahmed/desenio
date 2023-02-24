import * as React from "react";
import Slider from "react-slick";
import StoryCard from "./StoryCard";
import styles from "./StorySlider.module.css";

const slideShow = 8;

const StorySlider = () => {
  const sliderRef = React.useRef(null);
  const [data] = React.useState(new Array(12).fill(0));

  const [index, setIndex] = React.useState(0);
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const beforeChange = (prev, next) => {
    setIndex(next);
  };

  const gallerySettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slideShow,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: beforeChange,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="w-full relative pl-5 pt-2">
      <Slider ref={(c) => (sliderRef.current = c)} {...gallerySettings}>
        {data.map((_, index) => (
          <StoryCard key={index} />
        ))}
      </Slider>

      {/* btn group */}
      <button
        className={`absolute top-1/2 -left-4 mt-1 transform -translate-y-1/2
            ${index === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-50"} 
            ${styles.button}
          `}
        disabled={index === 0}
        onClick={previous}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${
            index === 0 ? "text-gray-500" : "text-gray-900"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        className={`absolute top-1/2 -right-5 mt-1 transform -translate-y-1/2
            ${
              data.length - slideShow === index
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-50"
            }
            ${styles.button}
          `}
        onClick={next}
        disabled={data.length - slideShow === index}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${
            data.length - slideShow === index
              ? "text-gray-500"
              : "text-gray-900"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default StorySlider;
