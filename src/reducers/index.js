import { combineReducers } from "redux";
import mural from "./muralReducer";
import toolbar from "./toolbarReducer";
import notes from "./notesReducer";
import clipboard from "./clipboardReducer";

export default combineReducers({
  mural,
  toolbar,
  notes,
  clipboard
});
