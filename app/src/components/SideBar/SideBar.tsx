import React from 'react'
import  User  from '../../assets/images/user.png'
import NavLinks from '../NavLinks/NavLinks'
export default function SideBar() {
  return (
    <div className='SideBar'>
        <img src={User}  className='SideBar__UserPhoto'/>
        <p className='SideBar__UserName'>Youssef Zekri</p>
        <NavLinks icon={<i className="fa-solid fa-house"></i>} path={"/"} message={'Home'} />
        <NavLinks icon={<i className="fa-regular fa-user"></i>} path={"/profile"} message={'Profile'} />
        <NavLinks icon={<i className="fa-regular fa-message"></i>} path={"/chat"} message={'Chat'} />
        <NavLinks icon={<i className="fa-solid fa-gears"></i>} path={"/settings"} message={'Settings'} />
        <NavLinks icon={<i className="fa-solid fa-arrow-right-from-bracket"></i>} path={"/Auth"} message={'Log out'} />
    </div>
  )
}
