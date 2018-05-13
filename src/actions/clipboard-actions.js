import { ADD_TO_CLIPBOARD, CLEAR_CLIPBOARD } from "../actionTypes";

export const addToClipboard = selectedNotes => {
  return {
    type: ADD_TO_CLIPBOARD,
    selectedNotes
  };
};

export const clearClipboard = () => {
  return { type: CLEAR_CLIPBOARD };
};
