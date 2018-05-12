import { combineReducers } from "redux";
import notes from "./notes-reducer";
import mural from "./mural-reducer";

export default combineReducers({
  notes,
  mural
});
