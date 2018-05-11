import uniqueId from "lodash/uniqueId";
import { ADD_NEW_NOTE, REMOVE_NOTE } from "../actionTypes";

export const addNewNote = text => ({
  type: ADD_NEW_NOTE,
  id: uniqueId(),
  text
});

export const removeNote = id => ({
  type: REMOVE_NOTE,
  id
});
