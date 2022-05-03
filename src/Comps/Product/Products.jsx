import React from "react";
import steels from "../../images/steels.jpg";
import cements from "../../images/cement.jpg";
import pipes from "../../images/pipes.jpg";
import wires from "../../images/wires.jpg";
import limestone from "../../images/limestone.jpg";
import Styles from "./Product.module.css";

const Products = () => {
  return (
    <>
      <div className={Styles.ourProducts}> Our Products</div>
      <div className={Styles.products}>
        <div className={Styles.column}>
          <img src={steels} width={230} alt="" />
          <div className={Styles.text}>
            <h3>Steels</h3>
          </div>
        </div>
        <div className={Styles.column}>
          <img src={cements} width={230} alt="" />
          <div className={Styles.text}>
            <h3>Cements</h3>
          </div>
        </div>

        <div className={Styles.column}>
          <img src={pipes} width={230} alt="" />
          <div className={Styles.text}>
            <h3>Pipes</h3>
          </div>
        </div>
        <div className={Styles.column}>
          <img src={wires} width={230} alt="" />
          <div className={Styles.text}>
            <h3>Wires</h3>
          </div>
        </div>
        <div className={Styles.column}>
          <img src={limestone} width={230} alt="" />
          <div className={Styles.text}>
            <h3>Limestone</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
