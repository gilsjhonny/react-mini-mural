import { combineReducers } from "redux";
import mural from "./muralReducer";
import notes from "./notesReducer";
import clipboard from "./clipboardReducer";

export default combineReducers({
  mural,
  notes,
  clipboard
});
