export const getProductsStarted = () => {
  return { type: "GET_PRODUCTS_STARTED" };
};
export const getProductsSuccess = ({ products }) => ({
  type: "GET_PRODUCTS_SUCCESS",
  payload: { products }
});
export const getProductsError = () => ({ type: "GET_PRODUCTS_ERROR" });
