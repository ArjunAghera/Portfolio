import axios from "axios";

const instance = axios.create({
  baseURL: "https://lit-meadow-55853.herokuapp.com/api",
});

export default instance;
