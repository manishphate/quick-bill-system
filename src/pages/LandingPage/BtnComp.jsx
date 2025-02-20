import React from "react";
import style from "./BtnComp.module.css";

const BtnComp = ({ name, bgColor, border, color, hoverColor }) => {
  console.log(hoverColor);
  return (
    <>
      <button
        style={{
          backgroundColor: bgColor,
          border: border,
          color: color,
          "--hoverColor": hoverColor, // Set CSS variable properly
        }}
        className={style.btn}
        data-hover={hoverColor}
      >
        {name}
      </button>
    </>
  );
};

export default BtnComp;
