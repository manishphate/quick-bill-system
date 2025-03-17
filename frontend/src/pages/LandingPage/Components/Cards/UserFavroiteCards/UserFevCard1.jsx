import React from "react";
import style from "./UserFevCard1.module.css";
// import img1 from "../../../assets/userFevCard1Img1.png"

const UserFevCard1 = ({width,head,paragraph,img}) => {
  return (
    <>
      <div className={style.cardSec}>
        <div style={{width:width}}>
        <h1>{head}</h1>
        <p>
            {paragraph}
   
        </p>
        </div>
        <img src={img} alt="" style={{width:width}} />
      </div>
    </>
  );
};

export default UserFevCard1;
