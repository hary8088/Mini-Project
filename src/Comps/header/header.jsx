import React from "react";
import Styles from "./header.module.css";
import { Link } from "react-router-dom";
function header() {
  return (
    <React.Fragment>
      <div className={Styles.Navbar}>
        <div className={Styles.brand}>
          <img src="../../assets/Sivam Traders-logos.jpeg" alt="Logo" />
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
            <h1>Aboutus</h1>
          </div>
          <div className={Styles.contactUs}>
            <h1>ContactUs</h1>
          </div>
          <div className={Styles.login}>
            <h1>
              <Link className="link" to="/login">
                Login
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default header;
