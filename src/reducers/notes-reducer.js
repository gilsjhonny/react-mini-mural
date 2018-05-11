import { ADD_NEW_NOTE, REMOVE_NOTE } from "../actionTypes";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_NEW_NOTE:
      const { id, text, color, width, height, x, y } = action.note;
      const newObject = { id, text, color, width, height, x, y };
      return [...state, newObject];
    case REMOVE_NOTE:
      return state.filter(note => note.id !== action.id);
    default:
      return state;
  }
}
