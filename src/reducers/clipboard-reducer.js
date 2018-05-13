import { ADD_TO_CLIPBOARD, CLEAR_CLIPBOARD } from "../actionTypes";

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CLIPBOARD:
      return { ...action.selectedNotes };
    case CLEAR_CLIPBOARD:
      return {};
    default:
      return state;
  }
}
