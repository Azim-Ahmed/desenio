import { Icon } from "@iconify/react";
/**
 *@function Button.jsx
 *@author Azim
 *
 **/

const Button = ({ icon, width, height, wording, textStyle }) => {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        margin: "7px -3px 0 10px",
        padding: "10px 20px",
        lineHeight: "normal",
        height: "35px",
        position: "relative",
        zIndex: "99",
        border: "1px solid black",
        cursor: "pointer",
      }}
    >
      <Icon
        icon={icon ? icon : "icon-park-solid:buy"}
        width={width ? width : "16"}
        height={height ? height : "15"}
      />{" "}
      <p
        style={textStyle ? textStyle : { marginLeft: "6px", fontSize: "11px" }}
      >
        {wording}
      </p>
    </div>
  );
};

export default Button;
