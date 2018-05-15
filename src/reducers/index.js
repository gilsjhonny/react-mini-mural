import { combineReducers } from "redux";
import mural from "./mural-reducer";
import notes from "./notes-reducer";
import clipboard from "./clipboard-reducer";

export default combineReducers({
  mural,
  notes,
  clipboard
});
