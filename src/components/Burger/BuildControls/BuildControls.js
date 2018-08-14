import React from "react";

import BuildControl from "./BuildControl/BuildControl";

import classes from "./BuildControls.css";

const controls = [
  {
    label: "Salad",
    type: "salad"
  },
  {
    label: "Bacon",
    type: "bacon"
  },
  {
    label: "Cheese",
    type: "cheese"
  },
  {
    label: "Meat",
    type: "meat"
  }
];
const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>$ {props.totalPrice.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        label={ctrl.label}
        key={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        isDisabled={props.disabled[ctrl.type]}
        removed={() => props.ingredientsRemoved(ctrl.type)}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
