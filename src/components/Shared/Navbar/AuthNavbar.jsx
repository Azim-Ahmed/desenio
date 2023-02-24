import * as React from "react";
import logo from "../../../assets/images/Vector.png";
import { Link } from "react-router-dom";

const AuthNavbar = () => {
  return (
    <header className="flex items-center justify-center p-4 pb-0 bg-white border-b shadow-lg sm:w-screen md:pb-2 dark:bg-gray-900">
      <Link to="/" className="no-underline">
        <img src={logo} alt="logo" />
      </Link>
    </header>
  );
};

export default AuthNavbar;
