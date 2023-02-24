import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between px-2 border-b-2 shadow dark:border-gray-200">
        <div className="flex items-center py-3">
          <p className="text-xl font-bold text-black dark:text-white ">
            Friends
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 ml-2 font-bold text-black dark:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/friend-request"
            className="font-normal text-blue-500 rounded hover:text-blue-600"
          >
            Friend Request
          </Link>
          <Link
            to="/find-friend"
            className="font-normal text-blue-500 rounded hover:text-blue-600"
          >
            Find Friend
          </Link>

          <div className="flex items-center w-56 h-10 bg-gray-100 border border-gray-300 rounded dark:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-2 font-bold text-black top-2 left-2 dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              className="w-full pl-3 text-sm text-black placeholder-gray-500 border-none outline-none bg-inherit dark:bg-gray-800 dark:text-white focus:ring-0 focus:border-0 dark:placeholder-gray-400 "
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-3 py-5 space-x-4 border-b-2 shadow ">
        <Link
          to="/friends"
          className="font-bold text-[#FFD700]  hover:text-[#ffd900]"
        >
          All Friends
        </Link>
        {[
          "Recently Added",
          "Birthday",
          "Work",
          "Collage",
          "High School",
          "Current City",
          "More",
        ].map((item, index) => (
          <Link
            key={index}
            to={`/friends/${item}`}
            className="font-semibold text-gray-900 hover:text-black dark:text-white"
          >
            {item}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
