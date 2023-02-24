import { Icon } from "@iconify/react";

/**
 *@function SelectSideBar.jsx
 *@author Azim
 *
 **/

const SelectSideBar = ({ wording, onClick }) => {
  return (
    <div className="flex justify-between items-center pl-2 pr-3">
      <p className="text-[12px] text-[#888888]">{wording}</p>
      <div className="cursor-pointer" onClick={onClick}>
        <Icon icon="basil:cross-outline" width="31" height="41" />
      </div>
    </div>
  );
};

export default SelectSideBar;
