import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

import Aux from "../../hoc/Aux";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    purchaseable: false,
    totalPrice: 4
  };
  updatePurchaseState = () => {
    const ingredients = { ...this.state.ingredients };
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((total, el) => {
        return total + el;
      }, 0);
    this.setState({
      purchaseable: sum > 0 ? true : false
    });
  };
  addIngredientHandler = type => {
    const ingredients = { ...this.state.ingredients };
    ingredients[type] += 1;

    const newTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState(
      {
        ingredients,
        totalPrice: newTotalPrice
      },
      () => this.updatePurchaseState()
    );
  };

  removeIngredientHandler = type => {
    const ingredients = { ...this.state.ingredients };
    if (ingredients[type] <= 0) {
      return;
    }
    ingredients[type] -= 1;
    const newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState(
      {
        totalPrice: newTotalPrice,
        ingredients
      },
      () => this.updatePurchaseState()
    );
  };
  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          disabled={disabledInfo}
          ingredientsRemoved={this.removeIngredientHandler}
          totalPrice={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
