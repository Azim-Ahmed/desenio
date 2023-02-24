import { NavLink } from "react-router-dom";

export default function AboutSidebar() {
  const navClass = ({ isActive }) => {
    const cls = "pl-4 cursor-pointer py-2 border-[5px] border-transparent border-solid";
    const activeCls =
      "font-bold border-l-yellow-400 bg-yellow-100";

    if (isActive) return cls + " " + activeCls;

    return cls;
  };

  return (
    <div class="col-span-2 overflow-y-auto bg-white shadow-md rounded-lg">
      <h2 className="font-bold p-4 text-lg">About</h2>
      <div className="flex flex-col">
        <NavLink
          to="overview"
          className={navClass}
        >
          Overview
        </NavLink>
        <NavLink to="work_and_education" className={navClass}>
          Work and education
        </NavLink>
        <NavLink to="places" className={navClass}>
          Places lived
        </NavLink>
        <NavLink to="contact_and_basic_info" className={navClass}>
          Contact and basic info
        </NavLink>
        <NavLink to="family_and_relationships" className={navClass}>
          Family and relationships
        </NavLink>
        <NavLink to="details" className={navClass}>
          Details
        </NavLink>
        <NavLink to="life_events" className={navClass}>
          Life events
        </NavLink>
      </div>
    </div>
  );
}
