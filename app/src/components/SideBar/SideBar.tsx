import React, { useState } from "react";
import User from "../../assets/images/user.png";
import NavLinks from "../NavLinks/NavLinks";
export default function SideBar() {
  const Links: { icon: string; path: string; message: string , name?:any }[] = [
    { icon: "fa-solid fa-house", path: "/", message: "Home" },
    { icon: "fa-regular fa-user", path: "/profile", message: "Profile" },
    { icon: "fa-regular fa-message", path: "/chat", message: "Chat" },
    { icon: "fa-solid fa-gears", path: "/settings", message: "Settings" },
    { icon: "fa-solid fa-arrow-right-from-bracket", path: "/Auth", message: "Log out" , name : 'logOut' },
  ];
  const [sideBar, setSideBar] = useState(false);
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <div className={sideBar? "SideBar SideBar--active" : "SideBar"}>

      {!sideBar ? (
        <>
          <img src={User} className="SideBar__UserPhoto" />
          <p className="SideBar__UserName">Youssef Zekri</p>
        </>
      ) : <i className="fa-brands fa-slack SideBar__logo"></i>}

      <i
        className={"fa-solid SideBar__Toggler fa-angle-left"}
        id={sideBar ? "SideBar__Toggler--active" : "SideBar__Toggler"}
        onClick={() => setSideBar(!sideBar)}
      ></i>
      {Links.map((link: { icon: string; path: string; message: string , name?:any }, i: Number) => (
        <NavLinks
          key={`link ${i}`}
          icon={<i className={link.icon}></i>}
          path={link.path}
          message={sideBar ? '':link.message}
          name = {link.name}
        />
      ))}

    </div>
  );
}
