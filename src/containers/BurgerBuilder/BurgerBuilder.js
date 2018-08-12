import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";

import Aux from "../../hoc/Aux";

class BurgerBuilder extends Component {
  state = {};
  render() {
    return (
      <Aux>
        <Burger />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
