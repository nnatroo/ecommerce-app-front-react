import React from "react";
import Product from "./Product";
import classes from "../modules/Products.module.css";

const Products = () => {
  return (
    <div className={classes['products-container']}>
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default Products;
