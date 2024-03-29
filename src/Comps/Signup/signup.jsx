import React from "react";
import Styles from "../Signup/signup.module.css";
import Button from "@material-ui/core/Button";
const signup = () => {
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.submain}>
          <form action="" className={Styles.form}>
            <div className={Styles.customer}>
              <h1>Sign Up</h1>
              <hr />
            </div>
            <div className={Styles.inner}>
              <div className={Styles.input}>
                <label htmlFor="">Name:</label>
                <input type="text" placeholder="Full Name" />
              </div>
              <div className={Styles.input}>
                <label htmlFor="">Email-ID:</label>
                <input type="email" name="" id="" placeholder="E-Mail" />
              </div>
              <div className={Styles.input}>
                <label htmlFor="">Contact</label>
                <input type="number" name="" id="" placeholder="ContactNo" />
              </div>
              <div className={Styles.input}>
                <label htmlFor="">Password</label>
                <input type="password" name="" id="" placeholder="PWD" />
              </div>
              <div className={Styles.input}>
                <label htmlFor="">Confirm-PWD</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Confirm_PWD"
                />
              </div>
              <div className={Styles.btn}>
                <Button variant="contained" color="primary">
                  SignUp
                </Button>
                <Button variant="contained" color="primary">
                  Reset
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default signup;
