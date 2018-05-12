import {
  SET_SELECTED_NOTE,
  REMOVE_ALL_SELECTED_NOTES,
  ENABLE_MULTIPLE_SELECTION,
  DISABLE_MULTIPLE_SELECTION,
  PUSH_SELECTED_NOTE
} from "../actionTypes";

export const setSelectedNote = id => ({
  type: SET_SELECTED_NOTE,
  id
});

export const pushSelectedNote = id => ({
  type: PUSH_SELECTED_NOTE,
  id
});

export const removeAllSelectedNotes = () => ({
  type: REMOVE_ALL_SELECTED_NOTES
});

export const enableMultipleSelection = () => ({
  type: ENABLE_MULTIPLE_SELECTION
});

export const disableMultipleSelection = () => ({
  type: DISABLE_MULTIPLE_SELECTION
});
