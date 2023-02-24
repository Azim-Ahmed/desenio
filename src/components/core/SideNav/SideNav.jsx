import { NavLink } from "react-router-dom";

const navClass = ({ isActive }) => {
  const cls =
    "pl-4 cursor-pointer py-2 border-[5px] border-transparent border-solid";
  const activeCls = "font-bold border-l-yellow-400 bg-yellow-100";

  if (isActive) return cls + " " + activeCls;

  return cls;
};

export default function SideNav({ title = "Title", item = [] }) {
  return (
    <div class="col-span-2 overflow-y-auto bg-white shadow-md rounded-lg">
      <h2 className="font-bold p-4 text-lg">{title}</h2>
      <div className="flex flex-col">
        {item.map(({ title, link }) => (
          <NavLink to={link} key={link} className={navClass}>
            {title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
