import React from "react";

const OverViewLayout = ({ children }) => {
  return (
    <div class="col-span-5 overflow-y-auto bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <div className="flex flex-col space-y-4 p-8">{children}</div>
    </div>
  );
};

export default OverViewLayout;
