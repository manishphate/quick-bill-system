import React from "react";
import style from "./leftCard.module.css";
const LeftCard = ({img,head,name}) => {
    console.log(img);
  return (
    <>
      <div className={style.leftcard}>
        <img
          src={img}
          alt=""
        />
        <div className={style.lCardContent}>
          <h1>"{head}"</h1>
          <p>{name}</p>
        </div>
      </div>
    </>
  );
};

export default LeftCard;
