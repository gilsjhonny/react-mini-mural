import uniqueId from "lodash/uniqueId";

const notes = [
  {
    text: "Note 1",
    id: uniqueId(),
    width: "100px",
    height: "100px",
    color: "#ff7675",
    x: "120px",
    y: "300px"
  },
  {
    text: "Note 2",
    id: uniqueId(),
    width: "100px",
    height: "100px",
    color: "#74b9ff",
    x: "55px",
    y: "385px"
  },
  {
    text: "Note 3",
    id: uniqueId(),
    width: "100px",
    height: "100px",
    color: "#00b894",
    x: "240px",
    y: "100px"
  },
  {
    text: "Note 4",
    id: uniqueId(),
    width: "100px",
    height: "100px",
    color: "#6c5ce7",
    x: "280px",
    y: "370px"
  },
  {
    text: "Note 4",
    id: uniqueId(),
    width: "100px",
    height: "100px",
    color: "#6c5ce7",
    x: "580px",
    y: "570px"
  }
];

export default {
  notes
};
