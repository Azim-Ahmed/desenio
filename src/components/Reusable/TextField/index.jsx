/**
 *@function TextField.jsx
 *@author Azim
 *
 **/

const TextField = ({ register, name, textarea, errors, select, className }) => {
  return (
    <>
      {textarea || select ? (
        <>
          {select && (
            <select
              className={
                className
                  ? className
                  : "w-full m-2 p-2 border-2 rounded border-solid border-gray-500"
              }
              {...register(name, { required: true })}
            >
              <option value="todo">todo</option>
              <option value="inProgress">inProgress</option>
              <option value="done">done</option>
            </select>
          )}
          {textarea && (
            <textarea
              className={
                className
                  ? className
                  : "w-full border-2 border-gray-500 px-5 py-2 rounded-sm"
              }
              cols="30"
              rows="3"
              placeholder="Add here todo description"
              {...register(name, { required: true })}
            />
          )}
        </>
      ) : (
        <>
          <input
            className={
              className
                ? className
                : "w-full border-2 border-gray-500 px-5 py-2 rounded-sm my-2"
            }
            type="text"
            placeholder="Add here todo title"
            {...register(name, { required: true })}
          />
        </>
      )}
      {errors[name] && (
        <span style={{ color: "red", margin: "4px 0px" }}>
          This field is required
        </span>
      )}
    </>
  );
};

export default TextField;
