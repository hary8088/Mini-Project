import React from "react";
import Styles from "./footer.module.css";
import { SiInstagram } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";

function footer() {
  return (
    <>
      <footer className={Styles.footer}>
        <div className={Styles.details}>
          <div className={Styles.customer}>
            <h2>Customer Care</h2>
            <h4>Contact Us</h4>
            <h4>Return Exchange</h4>
            <h4>Order Status</h4>
          </div>
          <div className={Styles.myaccount}>
            <h2>My Account</h2>
            <h4>Singup/Register</h4>
            <h4>Longin</h4>
          </div>
          <div className={Styles.social}>
            <div>
              <h2>Social</h2>
            </div>
            <div className={Styles.social_icons}>
              <h4>
                <SiInstagram />
              </h4>
              <h4>
                <ImFacebook2 />
              </h4>
              <h4>
                <ImWhatsapp />
              </h4>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
