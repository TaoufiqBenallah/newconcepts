const initialState = {
  loading: false,
  products: [],
  error: null,
  addingLoading: false,
  removingLoading: false
};

export default function panelReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS_FROM_PANEL_STARTED":
      return {
        ...state,
        loading: true
      };
    case "GET_PRODUCTS_FROM_PANEL_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload.products
      };
    case "GET_PRODUCTS_FROM_PANEL_ERROR":
      return {
        ...state,
        loading: false,
        error: "ERROR"
      };
    case "ADD_PRODUCT_TO_PANEL_STARTED":
      return {
        ...state,
        addingLoading: true
      };
    case "ADD_PRODUCT_TO_PANEL_SUCCESS":
      return {
        ...state,
        addingLoading: false,
        products: action.payload.products
      };
    case "ADD_PRODUCT_TO_PANEL_ERROR":
      return {
        ...state,
        addingLoading: false,
        error: "ERROR"
      };
    case "DELETE_PRODUCT_FROM_PANEL_STARTED":
      return {
        ...state,
        removingLoading: true
      };
    case "DELETE_PRODUCT_FROM_PANEL_SUCCESS":
      return {
        ...state,
        removingLoading: false,
        products: action.payload.products
      };
    case "DELETE_PRODUCT_FROM_PANEL_ERROR":
      return {
        ...state,
        removingLoading: false,
        error: "ERROR"
      };
    default:
      return state;
  }
}
