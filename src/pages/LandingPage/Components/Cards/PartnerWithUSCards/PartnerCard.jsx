import React from "react";
import style from "./PartnerCard.module.css";

const PartnerCard = ({ logo, head, paragraph }) => {
  return (
    <div className={style.mainSec}>
      <div>
        <img src={logo} alt="" />
      </div>
      <h3>{head}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default PartnerCard;
