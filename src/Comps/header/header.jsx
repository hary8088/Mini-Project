import React from "react";
import Styles from "./header.module.css";
function header() {
  return (
    <React.Fragment>
      <div className={Styles.Navbar}>
        <div className={Styles.brand}>
          <img src="../../assets/Sivam Traders-logos.jpeg" alt="Logo" />
        </div>
        <div className={Styles.header}>
          <div className={Styles.home}>
            <h1>Home</h1>
          </div>
          <div className={Styles.aboutus}>
            <h1>Aboutus</h1>
          </div>
          <div className={Styles.contactUs}>
            <h1>ContactUs</h1>
          </div>
          <div className={Styles.login}>
            <h1>Login</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default header;
