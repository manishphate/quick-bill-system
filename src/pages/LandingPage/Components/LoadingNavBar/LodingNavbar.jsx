import React from "react";
import style from "./LoadingNavbar.module.css";
import { NavLink } from "react-router-dom";
const LodingNavbar = () => {
  return (
    <nav className={style.navSec}>
      
        <h1 className={style.logo}>Quick-Bill</h1>
      

      <ul className={style.list}>
        <li>
          <NavLink to="/">Home</NavLink>
  </li>
        <li>
          <NavLink to="/solution">Solution</NavLink>
  </li>
        <li>
          <NavLink to="/acountant">Partner With Us</NavLink>
  </li>
        <li>
          <NavLink to="/contactus">Contact Us</NavLink>
  </li>
        <li>
          <NavLink to="/singin"><button className={style.sInBtn}>SING IN</button></NavLink>
  </li> <li>
          <NavLink to="/singup"><button className={style.sUpBtn}>SING UP NOW</button></NavLink>
  </li>
      </ul>

    </nav>
  );
};

export default LodingNavbar;
