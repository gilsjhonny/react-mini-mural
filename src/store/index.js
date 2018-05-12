import { createStore } from "redux";
import reducers from "../reducers";
import initialState from "./initial-state";

export default createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
