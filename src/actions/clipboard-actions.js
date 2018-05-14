import { CLIPBOARD_ADD, CLIPBOARD_CLEAR } from "../actionTypes";

export const addToClipboard = selectedNotes => {
  return {
    type: CLIPBOARD_ADD,
    selectedNotes
  };
};

export const clearClipboard = () => {
  return { type: CLIPBOARD_CLEAR };
};
