const pixelsToInt = pixels => {
  return parseInt(pixels.replace("px", ""), 10);
};

const translateNotes = (notes, toTranslate = 0) => {
  return notes.map(note => {
    const x =
      parseInt(note.x, 10) +
      (parseInt(toTranslate, 10) || parseInt(note.width, 10));

    const y =
      parseInt(note.y, 10) +
      (parseInt(toTranslate, 10) || parseInt(note.height, 10));

    return { ...note, x, y };
  });
};

export { translateNotes, pixelsToInt };
