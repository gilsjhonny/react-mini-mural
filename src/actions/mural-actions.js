import {
  SELECTED_NOTE_SET,
  SELECTED_NOTE_PUSH,
  SELECTED_NOTES_CLEAR,
  MULTIPLE_SELECTION_ENABLE,
  MULTIPLE_SELECTION_DISABLE
} from "../actionTypes";

export const setSelectedNote = id => ({
  type: SELECTED_NOTE_SET,
  id
});

export const pushSelectedNote = id => ({
  type: SELECTED_NOTE_PUSH,
  id
});

export const clearSelectedNotes = () => ({
  type: SELECTED_NOTES_CLEAR
});

export const enableMultipleSelection = () => ({
  type: MULTIPLE_SELECTION_ENABLE
});

export const disableMultipleSelection = () => ({
  type: MULTIPLE_SELECTION_DISABLE
});
