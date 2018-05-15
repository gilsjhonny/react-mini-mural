import clipboardReducer from "./clipboard-reducer";
import { CLIPBOARD_ADD, CLIPBOARD_CLEAR } from "../actionTypes";

const mockState = () => ({
  1: { note_id: 1 },
  2: { note_id: 2 }
});

describe("clipboardReducer()", () => {
  it("should return correct default state", () => {
    const expected = {};

    expect(clipboardReducer(undefined, {})).toEqual(expected);
  });

  it("should handle CLIPBOARD_ADD", () => {
    const expected = { 3: { note_id: 3 }, 4: { note_id: 4 } };
    const action = {
      type: CLIPBOARD_ADD,
      selectedNotes: { 3: { note_id: 3 }, 4: { note_id: 4 } }
    };

    expect(clipboardReducer(mockState(), action)).toEqual(expected);
  });

  it("should handle CLIPBOARD_CLEAR", () => {
    const expected = {};
    const action = { type: CLIPBOARD_CLEAR };

    expect(clipboardReducer(mockState(), action)).toEqual(expected);
  });
});
