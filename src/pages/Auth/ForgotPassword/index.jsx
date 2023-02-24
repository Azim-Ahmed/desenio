import React from "react";
import { useForm } from "react-hook-form";
import styles from "./ForgotPassword.module.scss";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className={styles.__wrapper}>
      <div className="container flex items-center justify-center min-w-full mx-auto dark:bg-gray-900">
        <div className="px-16 py-12 bg-white rounded-lg shadow-md shadow-slate-500/50 md:w-1/2 lg:w-2/5 dark:bg-gray-900">
          <div className="w-full">
            <h1 className="text-3xl font-bold text-center text-black dark:text-white">
              Forgotten Password
            </h1>
            <p className="text-sm text-center text-black dark:text-white">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>

            <form className="mt-10 space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" name="remember" value="true" />
              <div className="flex flex-col w-full">
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Enter Email or Phone number"
                  className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    },
                  })}
                />
                {errors.email?.message && (
                  <span className="text-sm text-red-500">
                    {errors.email?.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col w-full">
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg
                  hover:bg-gradient-to-r  hover:from-[#FFD700]  hover:to-[#DAA520]  transition duration-300
                  "
                >
                  send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
