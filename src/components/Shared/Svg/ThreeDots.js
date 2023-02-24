import React from "react";

const ThreeDots = () => {
  return (
    <svg
      width="25"
      height="5"
      viewBox="0 0 25 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12.5917"
        cy="2.59167"
        r="2.40833"
        transform="rotate(-180 12.5917 2.59167)"
        // fill="#210B04"
        className="text-gray-900 fill-current dark:text-gray-50"
      />
      <circle
        cx="2.59167"
        cy="2.59166"
        r="2.40833"
        transform="rotate(-180 2.59167 2.59166)"
        // fill="#210B04"
        className="text-gray-900 fill-current dark:text-gray-50"
      />
      <circle
        cx="22.5917"
        cy="2.59167"
        r="2.40833"
        transform="rotate(-180 22.5917 2.59167)"
        // fill="#210B04"
        className="text-gray-900 fill-current dark:text-gray-50"
      />
    </svg>
  );
};

export default ThreeDots;
