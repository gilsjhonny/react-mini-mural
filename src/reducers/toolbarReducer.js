import { COLOR_SET } from "../actionTypes";

export default function(state = {}, action) {
  switch (action.type) {
    case COLOR_SET:
      return { ...state, current_color: action.color };
    default:
      return state;
  }
}
