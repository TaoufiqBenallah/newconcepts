const initialState = {
  loading: false,
  products: [],
  error: null
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS_STARTED":
      return {
        ...state,
        loading: true
      };
    case "GET_PRODUCTS_SUCCESS":
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        products: action.payload.products
      };
    case "GET_PRODUCTS_ERROR":
      return {
        ...state,
        loading: false,
        error: "ERROR"
      };
    default:
      return state;
  }
}
