import React from "react";
import Button from "../../UI/Button/Button";
import Aux from "../../../hoc/Aux";
const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey, i) => {
    return (
      <li key={i}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Delicious burger with following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
      <Button clicked={props.purchaseCancelled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinued} btnType="Success">
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
