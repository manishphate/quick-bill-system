import React from "react";
import style from "./PartnerWithUs.module.css";
import BtnComp from "../BtnComponents/BtnComp";
import PartnerCard from "../Cards/PartnerWithUSCards/PartnerCard";

import lImg1 from "../../../../assets/partnerusLogo1.svg";
import lImg2 from "../../../../assets/partnerusLogo2.svg";
import lImg3 from "../../../../assets/partnerusLogo3.svg";
import lImg4 from "../../../../assets/partnerusLogo4.svg";
import lImg5 from "../../../../assets/partnerusLogo5.svg";
import lImg6 from "../../../../assets/partnerusLogo6.svg";

const PartnerWithUs = () => {
  return (
    <>
      <div className={style.topSection}>
        <div className={style.topCont}>
          <div className={style.content}>
            <h1>
              Connect & grow with <span>Quick-Bill</span>
            </h1>
            <p>
              Leverage the power of a modern accounting platform for you and
              your clients. Join our partner program today and make the switch
              to the future of business accounting.
            </p>
            <div className={style.btn}>
              <BtnComp name="Become a partner" variant="primary" />
              <BtnComp name="Find a partner" variant="secondery" />
            </div>
          </div>
          <div className={style.right}>
            <img
              src="https://www.zoho.com/books/accountant/dashboard.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* --------------------- Middle Section -------------------------- */}
      <div className={style.middleSec}>
        <h1>
          Why choose <span style={{ color: "white" }}>Quick-Bill </span>?
        </h1>
        <p>
          The modern accounting platform trusted by CAs & businesses worldwide
        </p>
        <div className={style.cards}>
          <PartnerCard
            logo={lImg1}
            head=" Simplify GST Compliance"
            paragraph="Send e-invoices and automate generation of GST returns with Quick-Bill. You can also track all transactions and changes with a comprehensive audit trail."
          />
          <PartnerCard
            logo={lImg2}
            head="Integrate and Collaborate"
            paragraph="Quick-Bill works well with payment gateways, partner banks, and other Quick apps to help you and your clients simplify business workflows and inter-department collaboration."
          />
          <PartnerCard
            logo={lImg3}
            head="Go Mobile"
            paragraph="Whether you’re on the web, smartphone or desktop app, promptly send quotes right after meetings, track business expenses, log time, and view reports!"
          />
          <PartnerCard
            logo={lImg4}
            head="Financial Reports"
            paragraph="Simplify your month-end closing process. Make informed decisions with 70+ financial reports to drive your business forward."
          />
          <PartnerCard
            logo={lImg5}
            head="Customization & Automation"
            paragraph="Customize Quick-Bill to suit your business with custom templates and fields. Trigger emails or notifications for periodic payment reminders."
          />
          <PartnerCard
            logo={lImg6}
            head="Migrate Seamlessly to Zoho"
            paragraph="Migrating to Quick-Bill is as simple as it sounds. If you need help along the way, support is just a phone call away. "
          />
        </div>
      </div>
    </>
  );
};

export default PartnerWithUs;
