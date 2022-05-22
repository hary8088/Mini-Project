import React from "react";
import { Link } from "react-router-dom";
import Styles from "./header1.module.css";
import img from "../../images/Sivam_Traders-white.png";
import { useState } from "react";

const header1 = () => {
  const [change, setchange] = useState(false);
  const scrollevent = () => {
    if (window.scrollY >= 70) {
      setchange(true);
    } else {
      setchange(false);
    }
  };
  window.addEventListener("scroll", scrollevent);
  return (
    <React.Fragment>
      <div
        className={
          change ? `${Styles.notNavbar} ${Styles.Navbar}` : Styles.Navbar
        }
      >
        <div className={Styles.brand}>
          <img src={img} alt="" />
        </div>
        <div className={Styles.header}>
          <div className={Styles.home}>
            <h1>
              <Link className="link" to="/">
                Home
              </Link>
            </h1>
          </div>
          <div className={Styles.aboutus}>
            <Link className="link" to="/about">
              <h1>Aboutus</h1>
            </Link>
          </div>
          <div className={Styles.contactUs}>
            <Link className="link" to="/contact">
              <h1>ContactUs</h1>
            </Link>
          </div>
          <div className={Styles.login}>
            <h1>
              <Link className="link" to="/login">
                Login
              </Link>
            </h1>
          </div>
          <div className={Styles.signup}>
            <h1>
              <Link className="link" to="/signup">
                Sign Up
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default header1;
