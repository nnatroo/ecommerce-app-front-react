import React from "react";
import classes from "../modules/Product.module.css";

const Product = () => {
  return (
    <>
      <div className={classes["product-wrapper"]}>
        <input type='checkbox'></input>
        <span className={classes["product-sku"]}>JVC200123</span>
        <span className={classes["product-sku"]}>Acme DISC</span>
        <span className={classes["product-sku"]}>1.00 $</span>
        <span className={classes["product-sku"]}>Size: 700 MB</span>
      </div>
    </>
  );
};

export default Product;
