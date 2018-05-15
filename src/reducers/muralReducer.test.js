import muralReducer from "./muralReducer";
import {
  SELECTED_NOTE_SET,
  SELECTED_NOTE_PUSH,
  SELECTED_NOTES_CLEAR,
  MULTIPLE_SELECTION_ENABLE,
  MULTIPLE_SELECTION_DISABLE
} from "../actionTypes";

const mockState = () => ({
  selected_notes: { 1: { note_id: 1 }, 2: { note_id: 2 } },
  multipleSelection: false
});

describe("muralReducer()", () => {
  let expected;
  let action;

  it("should return correct default state", () => {
    expected = {};

    expect(muralReducer(undefined, {})).toEqual(expected);
  });

  it("should handle SELECTED_NOTE_SET", () => {
    expected = {
      selected_notes: { 3: { note_id: 3 } },
      multipleSelection: false
    };
    action = { type: SELECTED_NOTE_SET, id: 3 };

    expect(muralReducer(mockState(), action)).toEqual(expected);
  });

  it("should handle SELECTED_NOTE_PUSH", () => {
    expected = {
      selected_notes: {
        1: { note_id: 1 },
        2: { note_id: 2 },
        3: { note_id: 3 }
      },
      multipleSelection: false
    };
    action = { type: SELECTED_NOTE_PUSH, id: 3 };

    expect(muralReducer(mockState(), action)).toEqual(expected);
  });

  it("should handle SELECTED_NOTES_CLEAR", () => {
    expected = { selected_notes: {}, multipleSelection: false };
    action = { type: SELECTED_NOTES_CLEAR };

    expect(muralReducer(mockState(), action)).toEqual(expected);
  });

  it("should handle MULTIPLE_SELECTION_ENABLE", () => {
    expected = {
      selected_notes: { 1: { note_id: 1 }, 2: { note_id: 2 } },
      multipleSelection: true
    };
    action = { type: MULTIPLE_SELECTION_ENABLE };

    expect(muralReducer(mockState(), action)).toEqual(expected);
  });

  it("should handle MULTIPLE_SELECTION_DISABLE", () => {
    expected = {
      selected_notes: { 1: { note_id: 1 }, 2: { note_id: 2 } },
      multipleSelection: false
    };
    action = { type: MULTIPLE_SELECTION_DISABLE };

    expect(muralReducer(mockState(), action)).toEqual(expected);
  });
});
