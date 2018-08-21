import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    }
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form action="">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            className={classes.Input}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className={classes.Input}
          />
          <input
            type="text"
            name="street"
            id="street"
            placeholder="Your Street"
            className={classes.Input}
          />
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            placeholder="Your Postal Code"
            className={classes.Input}
          />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
