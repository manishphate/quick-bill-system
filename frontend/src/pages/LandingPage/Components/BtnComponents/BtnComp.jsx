import React from "react";
import style from "./BtnComp.module.css";

const BtnComp = ({ name, variant }) => {
  console.log(variant);
  return (
    <>
      <button
        // style={{
        //   backgroundColor: bgColor,
        //   border: border,
        //   color: color,

        // }}
        className={`${style.btn} ${style[variant]}`}
      >
        {name}
      </button>
    </>
  );
};

export default BtnComp;
