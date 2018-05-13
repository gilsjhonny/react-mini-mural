import uniqueId from "lodash/uniqueId";
import { ADD_NEW_NOTE, REMOVE_NOTE, UPDATE_NOTE } from "../actionTypes";

export const addNewNote = note => ({
  type: ADD_NEW_NOTE,
  id: uniqueId(),
  note
});

export const updateNote = note => ({
  type: UPDATE_NOTE,
  note
});

export const removeNote = id => ({
  type: REMOVE_NOTE,
  id
});
