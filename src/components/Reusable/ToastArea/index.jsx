import { Toaster } from "react-hot-toast";
/**
 *@function AddButton.jsx
 *@author Azim
 *
 **/
const ToastArea = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        success: {
          style: {
            background: "white",
            color: "black",
            border: "1px solid #3323",
          },
        },
        error: {
          style: {
            background: "red",
            color: "black",
            border: "1px solid #3323",
          },
        },
      }}
    />
  );
};
export default ToastArea;
