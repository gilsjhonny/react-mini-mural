const translateNotes = (notes, pixelsToTranslate) => {
  return notes.map(note => {
    return {
      ...note,
      x: note.x + pixelsToTranslate,
      y: note.y + pixelsToTranslate
    };
  });
};

export { translateNotes };
