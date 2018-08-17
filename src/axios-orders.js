import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://burger-builder-ee24e.firebaseio.com/"
});

export default instance;
