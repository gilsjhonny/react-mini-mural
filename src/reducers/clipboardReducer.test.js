import clipboardReducer from "./clipboardReducer";
import { CLIPBOARD_ADD, CLIPBOARD_CLEAR } from "../actionTypes";

const mockState = () => ({
  1: { note_id: 1 },
  2: { note_id: 2 }
});

describe("clipboardReducer()", () => {
  let expected;
  let action;

  it("should return correct default state", () => {
    expected = {};

    expect(clipboardReducer(undefined, {})).toEqual(expected);
  });

  it("should handle CLIPBOARD_ADD", () => {
    expected = { 3: { note_id: 3 }, 4: { note_id: 4 } };
    action = {
      type: CLIPBOARD_ADD,
      selectedNotes: { 3: { note_id: 3 }, 4: { note_id: 4 } }
    };

    expect(clipboardReducer(mockState(), action)).toEqual(expected);
  });

  it("should handle CLIPBOARD_CLEAR", () => {
    expected = {};
    action = { type: CLIPBOARD_CLEAR };

    expect(clipboardReducer(mockState(), action)).toEqual(expected);
  });
});
