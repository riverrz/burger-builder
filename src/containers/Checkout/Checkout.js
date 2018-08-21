import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 1,
      meat: 1,
      bacon: 1
    }
  };
  componentDidMount() {
    const ingredients = {};
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      ingredients[decodeURIComponent(param[0])] = +decodeURIComponent(param[1]);
    }
    this.setState({
      ingredients
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
        <Route path={this.props.match.url+"/contact-data"} component={ContactData}/>
      </div>
    );
  }
}

export default Checkout;
