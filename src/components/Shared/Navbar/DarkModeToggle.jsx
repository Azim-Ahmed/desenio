import { useState } from "react";
import LightSvg from "../Svg/LightSvg";
import MoonSvg from "../Svg/MoonSvg";

const DarkModeToggle = ({
  color = "bg-[#F2F2F2]",
  on = false,
  onToggle = () => {},
  tabIndex = 0,
}) => {
  const [isOn, setIsOn] = useState(on);

  function toggle() {
    setIsOn(!isOn);
    onToggle(!isOn);
    localStorage.setItem("theme", !isOn);
  }

  function handleClick() {
    toggle();
  }

  function handleKeyDown({ key }) {
    if (key === "Enter") toggle();
  }

  return (
    <div
      role="checkbox"
      aria-checked={isOn ? "true" : "false"}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      className={`cursor-pointer z-10 w-24 h-9 ${color} rounded-full relative px-1.5 flex items-center mr-6${
        isOn ? "" : " justify-end"
      }`}
    >
      <div
        className={`w-8 h-8 rounded-full z-20 absolute transform duration-200 ease-out bg-[#FFD700] left-0.5 ${
          isOn ? "translate-x-8" : "translate-x-0"
        }`}
      />
      {!isOn ? <LightSvg /> : <MoonSvg />}
    </div>
  );
};

export default DarkModeToggle;
