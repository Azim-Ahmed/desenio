import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import useDebounce from "hooks/useDebounce";

const privacyCase = [
  {
    title: "Public",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-black dark:text-slate-400"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Friends",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-black dark:text-slate-400"
      >
        <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
      </svg>
    ),
  },
  {
    title: "Only me",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-black dark:text-slate-400"
      >
        <path
          fillRule="evenodd"
          d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const OverViewCard = ({
  Icon,
  title,
  subtitle,
  privacy,
  menu,
  edit,
  type,
  types,
  handleGender,
  me,
  setMe,
  setOpen,
  handleUpdateBirthDate,
  isUpdating,
  handleUpdateMaritalStatus,
}) => {
  const renderPrivacyIcon = () => {
    if (privacy === "public") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-black dark:text-slate-400"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z"
            clipRule="evenodd"
          />
        </svg>
      );
    } else if (privacy === "friends") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-black dark:text-slate-400"
        >
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      );
    } else if (privacy === "onlyme") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-black dark:text-slate-400"
        >
          <path
            fillRule="evenodd"
            d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
  };

  return (
    <div className="flex items-stretch w-full gap-4">
      <img src={Icon} className="object-contain w-6 h-6" alt={title} />

      <div className="flex flex-col flex-1 space-y-1">
        {edit ? (
          <p
            className={`text-sm font-bold text-gray-900 dark:text-gray-50 ${
              isUpdating && "cursor-not-allowed animate-pulse"
            }`}
          >
            {title}
          </p>
        ) : (
          <p
            className={`text-sm font-bold text-gray-900 dark:text-gray-50 ${
              isUpdating && "cursor-not-allowed animate-pulse"
            }`}
          >
            {title}
          </p>
        )}

        {subtitle && (
          <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            {subtitle}
          </p>
        )}

        {type === "maritalStatus" && (
          <select
            className={`h-8 w-40 p-0 m-0 px-2 rounded bg-white dark:bg-gray-800 text-black dark:text-white ${
              isUpdating && "cursor-not-allowed animate-pulse"
            }`}
            value={me.merital_status}
            id={me.merital_status}
            name={me.merital_status}
            onChange={(e) => {
              handleUpdateMaritalStatus(e.target.value.toLowerCase());
              setMe({
                ...me,
                merital_status: e.target.value,
              });
            }}
          >
            {types.map((type, idx) => (
              <option value={type} name={type} key={idx}>
                {type}
              </option>
            ))}
          </select>
        )}

        {type === "gender" && (
          <select
            className={`h-8 w-40 p-0 m-0 px-2 rounded bg-white dark:bg-gray-800 text-black dark:text-white ${
              isUpdating && "cursor-not-allowed animate-pulse"
            }`}
            value={me.gender}
            id={me.gender}
            name={me.gender}
            onChange={(e) => {
              handleGender(e.target.value.toLowerCase());
              setMe({
                ...me,
                gender: e.target.value,
              });
            }}
          >
            {types.map((type, idx) => (
              <option value={type} name={type} key={idx}>
                {type}
              </option>
            ))}
          </select>
        )}

        {type === "date" && (
          <input
            disabled={isUpdating}
            className={`h-8 w-40 p-0 m-0 px-2 rounded bg-white dark:bg-gray-800 text-black dark:text-white ${
              isUpdating && "cursor-not-allowed animate-pulse"
            }`}
            type="date"
            value={me.date_of_birth}
            onChange={(e) => {
              setMe({
                ...me,
                date_of_birth: e.target.value,
              });
              handleUpdateBirthDate(e.target.value);
            }}
          />
        )}
      </div>

      <div className="flex items-center space-x-2">
        {edit ? (
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center justify-center gap-1 cursor-pointer h-7 w-7">
              {renderPrivacyIcon()}
            </Menu.Button>

            <div className="absolute right-0 z-50 w-40 mt-2 top-5">
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 overflow-hidden origin-top-right transform scale-100 bg-white border border-gray-100 divide-y divide-gray-100 rounded-md shadow-lg opacity-100 w-28 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700">
                  {privacyCase.map(({ title, icon }, idx) => (
                    <Menu.Item key={idx}>
                      <button
                        className={`${
                          privacy === title.toLowerCase().replace(/\s/g, "") &&
                          "bg-gray-400 dark:bg-gray-900 hover:bg-gray-400 dark:hover:bg-gray-900"
                        } w-full group flex items-center px-3 py-1.5 space-x-1 text-sm text-black  dark:text-gray-200 hover:bg-gray-100 focus:bg-gray-100 capitalize dark:hover:bg-gray-600`}
                      >
                        {icon}
                        <span>{title}</span>
                      </button>
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </div>
          </Menu>
        ) : (
          <>{renderPrivacyIcon()}</>
        )}

        {menu && (
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center justify-center gap-1 rounded cursor-pointer h-7 w-7 hover:bg-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-black w-7 h-7 dark:text-slate-400"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Menu.Button>

            <div className="absolute right-0 z-50 w-40 mr-8 -top-2">
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 w-24 mt-2 overflow-hidden origin-top-right transform scale-100 bg-white border border-gray-100 divide-y divide-gray-100 rounded-md shadow-lg opacity-100 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-700">
                  <Menu.Item onClick={() => setOpen(true)}>
                    <button className="w-full group flex items-center px-3 py-1.5 space-x-2 text-sm hover:bg-gray-100 focus:bg-gray-100 capitalize dark:hover:bg-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4 text-gray-500 dark:text-gray-200"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>{" "}
                      <span>Edit</span>
                    </button>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </div>
          </Menu>
        )}
      </div>
    </div>
  );
};

export default OverViewCard;
