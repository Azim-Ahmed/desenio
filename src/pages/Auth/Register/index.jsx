import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./Register.module.scss";
import { useRegisterMutation } from "features/auth/authApi";

const Register = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [signup, { data, isLoading, error, isSuccess }] = useRegisterMutation();
  const onSubmit = (data) => {
    const name = data.firstName + " " + data.lastName;
    const finalizeData = {
      email: data.email,
      gender: data.gender,
      password: data.password,
      date_of_birth: data.date_of_birth,
      name,
      password_confirmation: data.password,
      phone: "+880122978176",
    };
    signup(JSON.stringify(finalizeData));
    reset();
  };
  React.useEffect(() => {
    if (isSuccess) {
      setTimeout(() => navigate("/login"), 3000);
    }
    return () => clearTimeout();
  }, [isSuccess, navigate]);
  return (
    <section className={styles.__wrapper}>
      <div className="container flex items-center justify-center min-w-full py-4 mx-auto dark:bg-gray-900">
        <div className="px-16 py-12 bg-white rounded-lg shadow-md shadow-slate-500/50 md:w-1/2 lg:w-2/5 dark:bg-gray-900">
          <div className="w-full">
            <h1 className="text-3xl font-bold text-center text-black dark:text-white">
              Let’s get you started
            </h1>
            <p className="text-sm text-center text-black dark:text-white">
              Sign up by typing your email/phone number, role and password.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-4">
              <input type="hidden" name="remember" value="true" />
              <div className="flex flex-col w-full">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter Email or Phone number"
                  className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email?.message && (
                  <span className="text-sm text-red-500">
                    {errors.email?.message}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-center w-full space-x-2 ">
                <div className="flex flex-col w-full">
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName?.message && (
                    <span className="text-sm text-red-500">
                      {errors.firstName?.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName?.message && (
                    <span className="text-sm text-red-500">
                      {errors.lastName?.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="relative flex flex-col w-full">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must have at least 6 characters",
                    },
                  })}
                />

                {errors.password?.message && (
                  <span className="text-sm text-red-500">
                    {errors.password?.message}
                  </span>
                )}

                <div
                  className="absolute right-0 flex items-center justify-center w-10 cursor-pointer top-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
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
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ) : (
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
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-center w-full space-x-2">
                <div className="flex flex-col w-full">
                  <label className="text-sm text-gray-500 dark:text-gray-100">
                    Date of Birth
                  </label>
                  <input
                    id="date_of_birth"
                    type="date"
                    name="date_of_birth"
                    placeholder="Date of birth"
                    className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                    {...register("date_of_birth", {
                      required: "Date of birth is required",
                    })}
                  />
                  {errors.date_of_birth?.message && (
                    <span className="text-sm text-red-500">
                      {errors.date_of_birth?.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-center w-full space-x-2">
                <div className="flex flex-col w-full">
                  <select
                    name="gender"
                    className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                    {...register("gender", {
                      required: "Gender is required",
                    })}
                  >
                    <option
                      value="gender"
                      disabled
                      className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                    >
                      Gender
                    </option>
                    <option
                      value="male"
                      className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                    >
                      Male
                    </option>
                    <option
                      value="female"
                      className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                    >
                      Female
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col w-full">
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg
                  hover:bg-gradient-to-r  hover:from-[#FFD700]  hover:to-[#DAA520]  transition duration-300
                  "
                >
                  Sign Up
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center py-6">
              <div className="flex-1 w-1/2 h-px bg-gray-800 dark:bg-gray-100" />
              <div className="mx-4 text-gray-800 dark:text-gray-100">OR</div>
              <div className="flex-1 w-1/2 h-px bg-gray-800 dark:bg-gray-100" />
            </div>

            <div className="flex items-center justify-center">
              <p className="text-sm text-gray-600 dark:text-gray-100">
                Not Registered Yet? &nbsp;
                <Link
                  to="/login"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
