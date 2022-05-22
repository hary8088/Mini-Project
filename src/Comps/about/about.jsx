import React from "react";
import Styles from "./about.module.css";
import Header1 from "../header1/header1";
import Footer from "../footer/footer";
import TataSteel from "../../images/tata_steel.png";
import jsw from "../../images/jsw_steel.png";
import zindal from "../../images/zindal_steel.png";
import ultrtec from "../../images/ultratech.jpg";
import acc from "../../images/acc.png";
import ramco from "../../images/ramco.png";
import finolex from "../../images/finolex.png";
import astral from "../../images/astral.png";
import ashirvad from "../../images/ashirvad.png";
import havels from "../../images/havells.jpg";
import legrand from "../../images/legrand.png";
import polycab from "../../images/polycab.png";
import indiana from "../../images/indiana.png";
import asian from "../../images/asian-paints.png";
import dulux from "../../images/dulux.png";
import nippon from "../../images/Nippon-Paint.png";
function about() {
  return (
    <>
      <Header1 />
      <div className={Styles.abouthead}>
        <div className={Styles.aboutCon}>
          <span>TRANSCENDING</span> boundaries,
          <br />
          <span>BRIDGING </span>the nation &
          <br />
          <span>EMPOWERING </span>the people.
          <br />
          <button>Contact</button>
        </div>
      </div>
      <div className={Styles.section2}>
        <h1>Quality Consulting</h1>
        <h3>What make us different from others</h3>
      </div>
      <div className={Styles.section3}>
        <div className={Styles.inle}>
          <h2>1</h2>
          <div className={Styles.overlay}>
            <h1>Customer Service</h1>
          </div>
        </div>
        <div className={Styles.inle}>
          <h2>2</h2>
          <div className={Styles.overlay}>
            <h1>Assured Delivery</h1>
          </div>
        </div>
        <div className={Styles.inle}>
          <h2>3</h2>
          <div className={Styles.overlay}>
            <h1>Quality Product</h1>
          </div>
        </div>
        <div className={Styles.inle}>
          <h2>4</h2>
          <div className={Styles.overlay}>
            <h1>Best Deal in Market</h1>
          </div>
        </div>
        <div className={Styles.inle}>
          <h2>5</h2>
          <div className={Styles.overlay}>
            <h1>High rated Service</h1>
          </div>
        </div>
        <div className={Styles.inle}>
          <h2>6</h2>
          <div className={Styles.overlay}>
            <h1>Customer Satifictions</h1>
          </div>
        </div>
      </div>
      <div className={Styles.section4}>
        <div className={Styles.section4head}>Our Product Brands</div>
        <br />
        <h1>Steels</h1>
        <div className={Styles.imgcon}>
          <div className={Styles.image}>
            <img src={TataSteel} width={230} alt="TATA" />
          </div>
          <div className={Styles.image}>
            <img src={jsw} width={230} alt="JSW" />
          </div>
          <div className={Styles.image}>
            <img src={zindal} width={230} alt="ZINDAL" />
          </div>
        </div>
        <h1>Cements</h1>
        <div className={Styles.imgcon}>
          <div className={Styles.image}>
            <img src={ultrtec} width={230} alt="ULTRATECH" />
          </div>
          <div className={Styles.image}>
            <img src={acc} width={230} alt="ACC" />
          </div>
          <div className={Styles.image}>
            <img src={ramco} width={230} alt="RAMCO" />
          </div>
        </div>
        <h1>Pipes</h1>
        <div className={Styles.imgcon}>
          <div className={Styles.image}>
            <img src={finolex} width={230} alt="FINOLEX" />
          </div>
          <div className={Styles.image}>
            <img src={astral} width={230} alt="ASTRAL" />
          </div>
          <div className={Styles.image}>
            <img src={ashirvad} width={230} alt="ASHIRVAD" />
          </div>
        </div>
        <h1>Wires</h1>
        <div className={Styles.imgcon}>
          <div className={Styles.image}>
            <img src={havels} width={230} alt="HAVELS" />
          </div>
          <div className={Styles.image}>
            <img src={legrand} width={230} alt="LEGRAND" />
          </div>
          <div className={Styles.image}>
            <img src={polycab} width={230} alt="POLYCAB" />
          </div>
        </div>
        <h1>LimeStone</h1>
        <div className={Styles.imgcon}>
          <div className={Styles.image}>
            <img src={indiana} width={230} alt="INDIANA" />
          </div>
        </div>
        <h1>Paints</h1>
        <div className={Styles.imgcon}>
          <div className={Styles.image}>
            <img src={asian} width={230} alt="Asian" />
          </div>
          <div className={Styles.image}>
            <img src={dulux} width={230} alt="Ultra Delux" />
          </div>
          <div className={Styles.image}>
            <img src={nippon} width={230} alt="Nippon" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default about;
