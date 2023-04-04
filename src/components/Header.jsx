import React from "react";
import classes from "../modules/Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigateTo = useNavigate();

  const onClickHandler = () => {
    navigateTo('/addproduct')
  };

  return (
    <>
      <div className={classes["header"]}>
        <div className={classes["header-title"]}>
          <h1>PRODUCT LIST</h1>
        </div>

        <div className={classes["buttons-container"]}>
          <button onClick={onClickHandler}>ADD</button>
          <button>МASS DELETE</button>
        </div>
      </div>
    </>
  );
};

export default Header;
