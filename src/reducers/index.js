import { combineReducers } from "redux";
import notes from "./notes-reducer";
import mural from "./mural-reducer";
import clipboard from "./clipboard-reducer";

export default combineReducers({
  notes,
  mural,
  clipboard
});
