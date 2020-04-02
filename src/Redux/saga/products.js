import { takeEvery, call, fork, put } from "redux-saga/effects";
import * as api from "../api/products";
import * as actions from "../actions/getProducts";

function* getProducts() {
  try {
    const result = yield call(api.getProducts);
    yield put(
      actions.getProductsSuccess({
        products: result.data
      })
    );
  } catch (error) {}
}

function* watchGetProductsStarted() {
  yield takeEvery("GET_PRODUCTS_STARTED", getProducts);
}

const productsSaga = [fork(watchGetProductsStarted)];

export default productsSaga;
