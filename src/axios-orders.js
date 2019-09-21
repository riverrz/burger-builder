import axios from 'axios';

const instance = axios.create({
  baseURL: "https://burger-builder-ee24e.firebaseio.com/"
});

export default instance;