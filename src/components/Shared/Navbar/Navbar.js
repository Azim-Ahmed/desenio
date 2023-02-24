import { Menu, Transition } from "@headlessui/react";
import { apiSlice } from "features/Api/apiSlice";
import { userLoggedOut } from "features/auth/authSlice";
import { useGetProfileQuery } from "features/profile/profileApi";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/Vector.png";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import HouseSvg from "../Svg/HouseSvg";
import MessageSvg from "../Svg/MessageSvg";
import NotificationSvg from "../Svg/NotificationSvg";
import UserSvg from "../Svg/UserSvg";
import DarkModeToggle from "./DarkModeToggle";

// const [showCommunity, setShowCommunity] = useState(false);
// const toggleCommunity = () => {
//   setShowCommunity(!showCommunity);
// };

const Navbar = ({ setIsDarkMode, isDarkMode }) => {
  const { data, isFetching } = useGetProfileQuery();
  const dispatch = useDispatch();
  const [showBar, setShowBar] = useState(false);

  const [isActiveHouse, setIsActiveHouse] = useState(false);
  const [isActiveMessage, setIsActiveMessage] = useState(false);
  const [isActiveNotification, setIsActiveNotification] = useState(false);
  const [isActiveUser, setIsActiveUser] = useState(false);

  const toggleBar = () => {
    setShowBar(!showBar);
  };

  const handleLogout = () => {
    dispatch(apiSlice.util.resetApiState());
    dispatch(userLoggedOut());
  };

  return (
    <div
      className={`p-4 pb-0 border-b shadow-lg w-screen bg-[#ffffff] md:flex md:items-center md:justify-between md:pb-2 fixed top-0 z-10 dark:bg-gray-900 dark:text-white`}
    >
      {/* <!--logo--> */}
      <div className="mb-4 flex items-center justify-between md:mb-0 md:w-[30%] sm:w-[100%]">
        <div className="flex items-center gap-x-4 w-[100%]">
          <h1 className="w-auto text-2xl leading-none">
            <Link to="/" className="no-underline">
              <img src={logo} alt="logo" />
            </Link>
          </h1>

          <div className="search-box flex items-center rounded-sm w-[100%] px-3 py-1 bg-[#F2F2F2]">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <input
              className="w-[100%] placeholder:text-[14px] bg-transparent outline-none border-none focus:ring-0  border-0 pl-3"
              type="text"
              placeholder="Search people..."
            />
          </div>
        </div>

        {/* <!--bar for mobile menu--> */}
        <a
          onClick={toggleBar}
          href="/#"
          className="text-black xs:ml-3 sm:ml-3 lg:hidden md:hidden hover:text-orange"
        >
          <i className="fa fa-2x fa-bars"></i>
        </a>
      </div>

      <nav className={`${showBar ? "block " : "hidden"} md:block lg:block`}>
        <ul className="list-reset md:flex md:items-center">
          <li className="md:ml-4 sm:mt-4 md:mt-0">
            <NavLink
              to="/home"
              className={({ isActive }) => setIsActiveHouse(isActive)}
            >
              <HouseSvg isActive={isActiveHouse} />
            </NavLink>
          </li>

          <li className="md:ml-8 sm:mt-4 md:mt-0">
            <NavLink
              to="/meet"
              className={({ isActive }) => setIsActiveMessage(isActive)}
            >
              <MessageSvg isActive={isActiveMessage} />
            </NavLink>
          </li>

          <li className="md:ml-8 sm:mt-4 md:mt-0">
            <NavLink
              to="/notifications"
              className={({ isActive }) => setIsActiveNotification(isActive)}
            >
              <NotificationSvg isActive={isActiveNotification} />
            </NavLink>
          </li>
          <li className="md:ml-8 sm:mt-4 md:mt-0">
            <NavLink
              to="/profile"
              className={({ isActive }) => setIsActiveUser(isActive)}
            >
              <UserSvg isActive={isActiveUser} />
            </NavLink>
          </li>
        </ul>
        {/* <ul className="list-reset md:flex md:items-center">
          <li className="md:ml-4 sm:mt-4 md:mt-0">
            <div className="indicator">
              <i class="fa-solid fa-user text-xl"></i>
              <span class="badge  bg-[#cc1016] border-[#cc1016] p-0 badge-sm indicator-item">
                +3
              </span>
            </div>
          </li>

          <li className="md:ml-8 sm:mt-4 md:mt-0">
            <div className="indicator">
              <i class="fas fa-comment-dots text-xl"></i>
              <span class="badge bg-[#cc1016] border-[#cc1016] badge-sm p-0 indicator-item">
                +9
              </span>
            </div>
          </li>

          <li className="md:ml-8 sm:mt-4 md:mt-0">
            <div class="indicator">
              <i class="fa-sharp fa-solid fa-bell text-xl"></i>
              <span class="badge bg-[#cc1016] border-[#cc1016] badge-sm p-0 indicator-item">
                +9
              </span>
            </div>
          </li>
        </ul> */}
      </nav>

      {/* <!--nav--> */}
      <nav className={`${showBar ? "block " : "hidden"} lg:block md:block`}>
        <ul className="list-reset md:flex md:items-center">
          <DarkModeToggle on={isDarkMode} onToggle={setIsDarkMode} />

          <Menu
            as="div"
            className="relative block w-full text-left rounded-lg dark:bg-gray-800 dark:text-gray-100"
          >
            <Menu.Button
              tabIndex={0}
              className="flex items-center w-full px-4 py-2 truncate rounded-lg group selectionRing hover:ring-gray-300 hover:bg-gray-100 bg-gray-50 dark:bg-gray-900 ring-1 ring-gray-200 space-x-2"
            >
              <div class="rounded-full overflow-hidden">
                <ProfilePicture
                  data={data}
                  isFetching={isFetching}
                  width={35}
                  height={35}
                />
              </div>

              <span className="flex-1 text-left text-black text-sm dark:text-white">
                {data?.data.name || "username"}
              </span>

              <i
                className={`fa-solid ${"fa-caret-down"} pr-2 ml-12 text-[#FFD700]`}
              ></i>
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right p-3 absolute left-0 z-50 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none w-full !min-w-0 transform opacity-100 scale-100 dark:bg-gray-800 dark:text-gray-100">
                <Menu.Item>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-800 rounded-sm"
                  >
                    Profile
                  </Link>
                </Menu.Item>

                <Menu.Item>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-100 dark:hover:text-gray-800 rounded-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>
                    Logout
                  </button>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
