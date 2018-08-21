import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0
  };
  componentWillMount() {
    const ingredients = {};
    const query = new URLSearchParams(this.props.location.search);
    let price = 0;
    for (let param of query.entries()) {
      if (decodeURIComponent(param[0]) === "price") {
        price = +decodeURIComponent(param[1]);
      } else {
        ingredients[decodeURIComponent(param[0])] = +decodeURIComponent(
          param[1]
        );
      }
    }
    this.setState({
      ingredients,
      totalPrice: price
    });
  }
  checkoutCancelledHandler = () => {
    // console.log(this.props.history);
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />

        {/* Since ContactData is render instead, so route props wont be available, use withRouter in ContactData */}
        <Route
          path={this.props.match.url + "/contact-data"}
          render={() => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
