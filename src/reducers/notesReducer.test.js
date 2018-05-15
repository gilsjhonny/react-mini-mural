import notesReducer from "./notesReducer";
import { NOTE_ADD, NOTE_COPY, NOTE_UPDATE, NOTE_DELETE } from "../actionTypes";

const mockState = () => ({
  1: {
    id: "1",
    text: "",
    color: "#ffe4e1",
    width: "140px",
    height: "140px",
    x: 512,
    y: 91
  }
});

describe("notesReducer()", () => {
  let expected;
  let action;

  it("should return correct default state", () => {
    expected = {};

    expect(notesReducer(undefined, {})).toEqual(expected);
  });

  it("should handle NOTE_ADD", () => {
    expected = {
      1: {
        id: "1",
        text: "",
        color: "#ffe4e1",
        width: "140px",
        height: "140px",
        x: 512,
        y: 91
      },
      2: {
        id: "2",
        text: "",
        color: "#ffe4e1",
        width: "140px",
        height: "140px",
        x: 600,
        y: 650
      }
    };

    const noteToAdd = {
      id: "2",
      text: "",
      color: "#ffe4e1",
      width: "140px",
      height: "140px",
      x: 600,
      y: 650
    };
    action = { type: NOTE_ADD, note: noteToAdd };

    expect(notesReducer(mockState(), action)).toEqual(expected);
  });

  it("should handle NOTE_COPY", () => {
    expected = {
      1: {
        id: "1",
        text: "",
        color: "#ffe4e1",
        width: "140px",
        height: "140px",
        x: 512,
        y: 91
      },
      2: {
        id: "2",
        text: "",
        color: "#ffe4e1",
        width: "140px",
        height: "140px",
        x: 512,
        y: 91
      }
    };
    const noteToCopy = {
      id: "1",
      text: "",
      color: "#ffe4e1",
      width: "140px",
      height: "140px",
      x: 512,
      y: 91
    };
    action = { type: NOTE_COPY, newId: "2", note: noteToCopy };

    expect(notesReducer(mockState(), action)).toEqual(expected);
  });

  it("should handle NOTE_UPDATE", () => {
    expected = {
      1: {
        id: "1",
        text: "New Text",
        color: "#ffe4e1",
        width: "140px",
        height: "140px",
        x: 512,
        y: 91
      }
    };
    const updatedNote = {
      id: "1",
      text: "New Text",
      color: "#ffe4e1",
      width: "140px",
      height: "140px",
      x: 512,
      y: 91
    };
    action = { type: NOTE_UPDATE, note: updatedNote };

    expect(notesReducer(mockState(), action)).toEqual(expected);
  });

  it("should handle NOTE_DELETE", () => {
    expected = {};
    action = { type: NOTE_DELETE, id: "1" };

    expect(notesReducer(mockState(), action)).toEqual(expected);
  });
});
