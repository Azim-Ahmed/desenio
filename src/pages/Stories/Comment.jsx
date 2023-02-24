import React from "react";
import sendIcon from "../../assets/images/send.svg";
import svgIcon from "../../assets/images/svg.svg";
import imageIcon from "../../assets/images/image.svg";

const Comment = () => {
  return (
    <div className="bg-white text-black px-5 py-2 flex items-center space-x-2">
      <div
        className="flex-1 h-10 rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white flex items-center "
        style={{
          boxShadow:
            "0 0 0 1px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1)",
          border: "1px solid rgb(0, 0, 0)",
        }}
      >
        <input
          type="text"
          placeholder="Write your comment..."
          className="w-full h-10 rounded-md bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:border-none"
        />

        <div className="flex items-center space-x-1 pr-2">
          <button className="w-7 h-10">
            <img
              src={svgIcon}
              className="w-5 h-5 mx-auto my-auto"
              alt="svh icon"
            />
          </button>
          <button className="w-7 h-10">
            <img
              src={imageIcon}
              className="w-5 h-5 mx-auto my-auto"
              alt="img icon"
            />
          </button>
        </div>
      </div>
      <button className="w-10 h-10">
        <img src={sendIcon} className="w-5 h-5 mx-auto my-auto" alt="send" />
      </button>
    </div>
  );
};

export default Comment;
