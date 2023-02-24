import PostModal from "components/Shared/Modal/PostModal";
import React from "react";

const UpdateModal = ({
  open,
  setOpen,
  handleChangeFunc,
  value,
  setValue,
  isUpdating,
  name,
  title,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleChangeFunc(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValue({
      ...value,
      [name]: value,
    });
  };

  return (
    <PostModal open={open} setOpen={setOpen}>
      <div className="w-2/5 p-6 h-44 rounded-md  bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="mb-4">
          <h1 className="text-2xl text-center font-bold">{title}</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            name={name}
            onChange={handleChange}
            disabled={isUpdating}
            className={`w-full px-2 py-1 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500
                          ${isUpdating && "cursor-not-allowed"}`}
          />

          <button
            type="submit"
            className="bg-gray-900  mt-5 rounded-sm text-white px-4 py-2 disabled:cursor-not-allowed disabled:animate-pulse"
            disabled={isUpdating}
          >
            {isUpdating ? "Updating" : "Update"}
          </button>
        </form>
      </div>
    </PostModal>
  );
};

export default UpdateModal;
