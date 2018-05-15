import * as utils from "./utils";

describe("utils", () => {
  describe("pixelsToInt()", () => {
    it("should convert pixels to integer", () => {
      const pixels = "120px";
      const expected = 120;

      expect(utils.pixelsToInt(pixels)).toBe(expected);
    });
  });

  describe("translateNotes()", () => {
    it("should use actual height and width to translate if there are no pixels specified", () => {
      const notes = [
        {
          id: "1",
          text: "",
          color: "",
          width: "100px",
          height: "100px",
          x: 512,
          y: 91
        }
      ];
      const expected = [
        {
          id: "1",
          text: "",
          color: "",
          width: "100px",
          height: "100px",
          x: 612,
          y: 191
        }
      ];

      expect(JSON.stringify(utils.translateNotes(notes))).toBe(
        JSON.stringify(expected)
      );
    });
    it("should translate according to pixels specified", () => {
      const notes = [
        {
          id: "1",
          text: "",
          color: "",
          width: "100px",
          height: "100px",
          x: 512,
          y: 91
        }
      ];
      const expected = [
        {
          id: "1",
          text: "",
          color: "",
          width: "100px",
          height: "100px",
          x: 612,
          y: 191
        }
      ];

      expect(JSON.stringify(utils.translateNotes(notes, 100))).toBe(
        JSON.stringify(expected)
      );
    });
  });
});
