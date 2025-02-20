import React from "react";
import styel from "./Landing.module.css";
import LodingNavbar from "../LoadingNavBar/LodingNavbar.jsx";
import BtnComp from "./btnComp.jsx";
import lodingImg1 from "../../assets/lodingPageimg1.webp";
import LeftCard from "./LeftCard.jsx";

import lCimg1 from "../../assets/leftCardimg1.png";
import lCimg2 from "../../assets/leftCarding2.jpeg";
import lCimg3 from "../../assets/leftCardImg3.avif";

import quatationImg from "../../assets/landingDoubleQuatationImg.svg";

const Landing = () => {
  return (
    <>
      <LodingNavbar />
      {/* ----------------- Top container --------------------------- */}
      <div className={styel.mSection1}>
        <div className={styel.headingContent}>
          <h1 className={styel.headingText}>
            Comprehensive <br /> accounting platform for growing businesses
          </h1>
          <p className={styel.hParagraphText}>
            Manage end-to-end accounting—from banking & e-invoicing to inventory
            & payroll with the best accounting software in India.
          </p>
          <div className={styel.btn}>
            <BtnComp
              name="Start free trial"
              bgColor="#f5ba31"
              border="none"
              color="black"
            />
            <BtnComp
              name="Request a demo"
              bgColor="#006fda"
              color="white"
              hoverColor="red"
            />
          </div>
          <div className={styel.imgCont}>
            <img src={lodingImg1} alt="" />
          </div>
        </div>
      </div>

      {/* --------------------- middle container ------------------------- */}
      <div className={styel.middleCont}>
        <div className={styel.left}>
          <h1 className={styel.lefth1}>
            Make the switch to the future of business accounting
          </h1>
          <hr />
          <LeftCard
            img={lCimg1}
            head="Most versatile accounting software for every business need "
            name="Safwan Ahmad , CO-FOUNDER"
          />
          <hr />
          <LeftCard
            img={lCimg2}
            head="Backbone of my company's finance and operations"
            name="Md Aarif , CEO"
          />
          <hr />
          <LeftCard
            img={lCimg3}
            head="Best accounting software made for businesses worldwide"
            name="Shahraukh Khan , CEO - MAVI"
          />
          <hr />
        </div>
        <div className={styel.right}>
          <div>
            <img src={quatationImg} alt="" />
            <h1>I TRUST  <br /><span>ZOHO&nbsp;BOOKS</span><br /> FOR MY  <br />BUSINESS</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
