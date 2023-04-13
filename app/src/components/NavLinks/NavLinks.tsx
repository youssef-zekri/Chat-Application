import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  path: string;
  message: string;
  icon: any;
}
export default function NavLinks(Props: Props) {
  return (
    <NavLink
      to={Props.path}
      className={({ isActive }) =>
        isActive ? "SideBar__Link SideBar__Link--active" : "SideBar__Link"
      }
    >
      {Props.icon}
      {Props.message}
    </NavLink>
  );
}
