import { CLIPBOARD_ADD, CLIPBOARD_CLEAR } from "../actionTypes";

export default function(state = {}, action) {
  switch (action.type) {
    case CLIPBOARD_ADD:
      return { ...action.selectedNotes };
    case CLIPBOARD_CLEAR:
      return {};
    default:
      return state;
  }
}
