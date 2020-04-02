// Get Product from Panel
export const getProductsFromPanelStarted = () => ({
  type: "GET_PRODUCTS_FROM_PANEL_STARTED"
});
export const getProductsFromPanelSuccess = ({ products }) => ({
  type: "GET_PRODUCTS_FROM_PANEL_SUCCESS",
  payload: { products }
});
export const getProductsFromPanelError = () => ({
  type: "GET_PRODUCTS_FROM_PANEL_ERROR"
});

// Add Product to panel
export const addProductToPanelStarted = () => ({
  type: "ADD_PRODUCT_TO_PANEL_STARTED"
});
export const addProductToPanelSuccess = ({ product }) => ({
  type: "ADD_PRODUCT_TO_PANEL_SUCCESS",
  payload: { product }
});
export const addProductToPanelError = () => ({
  type: "ADD_PRODUCT_TO_PANEL_ERROR"
});

// Delete Product from panel
export const deleteProductFromPanelStarted = () => ({
  type: "DELETE_PRODUCT_FROM_PANEL_STARTED"
});
export const deleteProductFromPanelSuccess = ({ product }) => ({
  type: "DELETE_PRODUCT_FROM_PANEL_SUCCESS",
  payload: { product }
});
export const deleteProductFromPanelError = () => ({
  type: "DELETE_PRODUCT_FROM_PANEL_ERROR"
});
