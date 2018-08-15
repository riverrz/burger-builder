import React from "react";
import Toolbar from '../Navigation/Toolbar/Toolbar';

import classes from "./Layout.css";

import Aux from "../../hoc/Aux";
const layout = props => (
  <Aux>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
