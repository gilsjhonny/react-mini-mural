import React from "react";
import { translateNotes } from "../../utils";
import "./styles.css";

class ClipboardManager extends React.Component {
  constructor(props) {
    super(props);
    this.clipboardManager = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("copy", this.handleCopy);
    window.addEventListener("paste", this.handlePaste);
  }

  handleCopy = () => {
    const { selectedNotes, addToClipboard } = this.props;
    if (Object.keys(selectedNotes).length) addToClipboard(selectedNotes);
  };

  handlePaste = () => {
    const { clearClipboard, clipboard, notes, addNote } = this.props;

    const notesToClone = Object.values(clipboard).map(note => {
      const id = note["note_id"];
      return notes[id];
    });

    const notesRepositioned = translateNotes(notesToClone);

    notesRepositioned.forEach(note => {
      addNote(note);
    });

    clearClipboard();
  };

  render() {
    const { clipboard } = this.props;
    const clipboardCount = Object.values(clipboard).length;

    return (
      <div>
        {!!clipboardCount ? (
          <div className="ClipboardManager" ref={this.clipboardManager}>
            <div className="clipboard-icon">
              <i className="fa fa-clipboard" aria-hidden="true" />
              <span className="clipboard-counter">{clipboardCount}</span>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ClipboardManager;
