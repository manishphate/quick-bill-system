import React from "react";
import style from "./LoadingNavbar.module.css";
const LodingNavbar = () => {
  return (
    <nav className={style.navSec}>
      
        <h1 className={style.logo}>Quick-Bill</h1>
      

      <ul className={style.list}>
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">Solution</a>
        </li>
        <li>
          <a href="">contomer</a>
        </li>
        <li>
          <a href="">Partner With Us</a>
        </li>
        <li>
          <a href=""><button className={style.sInBtn}>SING IN</button></a>
        </li> <li>
          <a href=""><button className={style.sUpBtn}>SING UP NOW</button></a>
        </li>
      </ul>

    </nav>
  );
};

export default LodingNavbar;
