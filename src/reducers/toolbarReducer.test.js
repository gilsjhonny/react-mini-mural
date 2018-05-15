import toolbarReducer from "./toolbarReducer";
import { COLOR_SET } from "../actionTypes";

const mockState = () => ({
  current_color: "white"
});

describe("toolbarReducer()", () => {
  let expected;
  let action;

  it("should return correct default state", () => {
    expected = {};

    expect(toolbarReducer(undefined, {})).toEqual(expected);
  });

  it("should handle COLOR_SET", () => {
    expected = { current_color: "mistyrose" };
    action = { type: COLOR_SET, color: "mistyrose" };

    expect(toolbarReducer(mockState(), action)).toEqual(expected);
  });
});
