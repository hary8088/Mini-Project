import React from "react";
import Styles from "./home.module.css";
import { MdOutlineVerified } from "react-icons/md";
import Products from "../Product/Products";
import Header from "../header/header";
import Footer from "../footer/footer";

function home() {
  return (
    <div>
      <Header />
      <div className={Styles.homeCon}>
        <div className={Styles.content}>
          <h2>We are Builders</h2>
          <h1>We will build your</h1>
          <h1>dreams.</h1>
        </div>
      </div>
      <div className={Styles.data}>
        <div className={Styles.list}>
          <li>Quality Service</li>
          <MdOutlineVerified className={Styles.icon} />
        </div>
        <div className={Styles.list}>
          <li>Best Market Deals</li>
          <MdOutlineVerified className={Styles.icon} />
        </div>
        <div className={Styles.list}>
          <li>Free Shipping</li>
          <MdOutlineVerified className={Styles.icon} />
        </div>
        <div className={Styles.list}>
          <li>Authorised Dealer </li>
          <MdOutlineVerified className={Styles.icon} />
        </div>
      </div>
      <Products />
      <div className={Styles.section1head}>
        <h1>Product Selection Process</h1>
        <br />
        <p>Every building starts with a concept and a design.</p>
        <p>
          But there is confusion on selecting the quality products from the
          market.
        </p>
        <br />
        <h2>But here we have solution for your confusion</h2>
        <br />
      </div>
      <div className={Styles.section2}>
        <div className={Styles.innersec2}>
          <div className={Styles.card}>
            <img
              src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={300}
            />
            <h2>Products</h2>
            <p>
              "We are authorised dealer for multiple reputed construction
              material production company and trusted by them...."
            </p>
          </div>
          <div className={Styles.card}>
            <img
              src="https://images.pexels.com/photos/4730242/pexels-photo-4730242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={300}
            />
            <h2>Quality</h2>
            <p>
              "Our first and most important thing we care is Quality of the
              Product and Safety of the Customer. Which concern's us more...."
            </p>
          </div>
          <div className={Styles.card}>
            <img
              src="https://images.pexels.com/photos/5313361/pexels-photo-5313361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={300}
            />
            <h2>Service</h2>
            <p>
              "Preparing For Your Dreams, We Provide Truly Prominent Better
              Solutions. Our advisors have well knowledge in products and its
              quality...."
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default home;
