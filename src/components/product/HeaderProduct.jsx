import React from "react";
import classes from "../../modules/Header.module.css";
import { useNavigate } from "react-router-dom";

const HeaderProduct = () => {

  return (
    <>
      <div className={classes["header"]}>
        <div className={classes["header-title"]}>
          <h1>PRODUCT ADD</h1>
        </div>

        <div className={classes["buttons-container"]}>
          <button>SAVE</button>
          <button>CANCEL</button>
        </div>
      </div>
    </>
  );
};

export default HeaderProduct;
