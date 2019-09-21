import * as actionTypes from "./actionTypes";
import axios from "axios";
import keys from "../../keys/keys";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = authData => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const auth = (email, password) => {
  return dispatch => {
    // authenticate the user
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true
    };
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${keys.FIREBASE_AUTH_API_KEY}`,
        authData
      )
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
