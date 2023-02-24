import React from "react";

const AcceptSvg = ({ handleClick }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      className="h-4 w-4 cursor-pointer"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
    >
      <circle
        cx="6.9995"
        cy="6.9995"
        r="6.9995"
        // fill="black"
        // fill-opacity="0.38"
        className="fill-current text-green-500"
      />
      <g clip-path="url(#clip0_33_1110)">
        <path
          d="M6.19539 8.92283C6.26256 8.85859 6.30815 8.81814 6.34893 8.77769C7.73082 7.40724 9.11511 6.03679 10.4946 4.66396C10.6433 4.51645 10.8041 4.42128 11.02 4.46649C11.4374 4.55214 11.5934 5.02085 11.3103 5.33729C11.2887 5.36109 11.2647 5.38488 11.2407 5.40629C9.70769 6.92901 8.17465 8.44935 6.64162 9.9697C6.36093 10.2481 6.07303 10.2504 5.79714 9.97683C4.99104 9.17978 4.18493 8.38036 3.38123 7.58093C3.14132 7.34062 3.11733 7.04797 3.31886 6.82433C3.53238 6.5864 3.87065 6.58402 4.11536 6.8267C4.77032 7.47386 5.42527 8.1234 6.07783 8.77531C6.12102 8.81576 6.1522 8.8681 6.19539 8.92283Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_33_1110">
          <rect
            width="8.27213"
            height="5.72686"
            fill="white"
            transform="translate(3.18158 4.45422)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AcceptSvg;
