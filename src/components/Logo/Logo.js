import React from "react";
import LOGO from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";
const logo = props => (
  <div className={classes.Logo}>
    <img src={LOGO} alt="Logo" />
  </div>
);

export default logo;
