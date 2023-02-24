import React from "react";
import { useForm } from "react-hook-form";
import styles from "./ResetPassword.module.scss";

const ResetPassword = () => {
  const smsRef = React.useRef(null);
  const emailRef = React.useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // check type of input sms or email
    if (smsRef.current.checked) {
      const formatData = {
        type: smsRef.current.value,
        data: data.otp,
      };

      console.log(formatData);
    } else if (emailRef.current.checked) {
      const formatData = {
        type: emailRef.current.value,
        data: data.otp,
      };

      console.log(formatData);
    } else {
      return alert("Please select type of input");
    }
  };

  return (
    <section className={styles.__wrapper}>
      <div className="container flex items-center justify-center min-w-full mx-auto dark:bg-gray-900">
        <div className="px-16 py-12 bg-white rounded-lg shadow-md shadow-slate-500/50 md:w-1/2 lg:w-2/5 dark:bg-gray-900">
          <div className="w-full">
            <h1 className="text-3xl font-bold text-center text-black dark:text-white">
              Reset Password
            </h1>
            <p className="text-sm text-center text-black dark:text-white">
              How do you want to receive the code to reset your password?
            </p>

            <form className="mt-10 space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center justify-center gap-4">
                <p className="text-gray-800 dark:text-white">OTP Type:</p>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <input
                      type="radio"
                      id="sms"
                      name="otpType"
                      value="sms"
                      ref={smsRef}
                    />
                     {" "}
                    <label
                      htmlFor="sms"
                      className="text-gray-800 dark:text-white"
                    >
                      SMS
                    </label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <input
                      type="radio"
                      id="email"
                      name="otpType"
                      value="email"
                      ref={emailRef}
                    />
                     {" "}
                    <label
                      htmlFor="email"
                      className="text-gray-800 dark:text-white"
                    >
                      Email
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full">
                <input
                  id="otp"
                  type="text"
                  name="otp"
                  placeholder="Enter Code"
                  className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                  {...register("otp", {
                    required: "OTP is required",
                    minLength: {
                      value: 4,
                      message: "OTP must have at least 4 characters",
                    },
                  })}
                />
                {errors.otp?.message && (
                  <span className="text-sm text-red-500">
                    {errors.otp?.message}
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
                  Verify
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center mt-4">
              <p className="text-sm text-black dark:text-white">
                Didn't receive the code?{" "}
                <span className="font-semibold text-blue-500 cursor-pointer">
                  Resend Code
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
