import { ADD_SELECTED_NOTE, REMOVE_ALL_SELECTED_NOTES } from "../actionTypes";

export const addSelectedNote = id => ({
  type: ADD_SELECTED_NOTE,
  id
});

export const removeAllSelectedNotes = () => ({
  type: REMOVE_ALL_SELECTED_NOTES
});
