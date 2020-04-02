import axios from "axios";

export const getProducts = () => {
  return axios.get("http://localhost/newconceptsphp/products.php");
};
