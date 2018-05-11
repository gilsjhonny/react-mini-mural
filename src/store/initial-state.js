import uniqueId from "lodash/uniqueId";

const notes = [
  { text: "Hola", id: uniqueId() },
  { text: "Hola 2", id: uniqueId() }
];

export default {
  notes
};
