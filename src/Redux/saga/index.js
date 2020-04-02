import ProductsSaga from "./products";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([...ProductsSaga]);
}
