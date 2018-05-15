import React from "react";
import PropTypes from "prop-types";
import { translateNotes } from "../../utils";
import "./styles.css";

class ClipboardManager extends React.Component {
  static propTypes = {
    clipboard: PropTypes.object,
    notes: PropTypes.object,
    selectedNotes: PropTypes.object,
    addToClipboard: PropTypes.func,
    clearClipboard: PropTypes.func,
    copyNote: PropTypes.func
  };

  componentDidMount() {
    window.addEventListener("copy", this.handleCopy);
    window.addEventListener("paste", this.handlePaste);
  }

  handleCopy = () => {
    const { selectedNotes, addToClipboard } = this.props;
    if (Object.keys(selectedNotes).length) addToClipboard(selectedNotes);
  };

  handlePaste = () => {
    const { clearClipboard, clipboard, notes, copyNote } = this.props;

    const notesToClone = Object.values(clipboard).map(noteInClipboard => {
      const id = noteInClipboard["note_id"];
      return notes[id];
    });

    const notesRepositioned = translateNotes(notesToClone);

    notesRepositioned.forEach(note => {
      copyNote(note);
    });

    clearClipboard();
  };

  render() {
    const { clipboard } = this.props;
    const clipboardCount = Object.values(clipboard).length;

    return (
      <div className="ClipboardManager">
        {!!clipboardCount ? (
          <div className="clipboard-icon">
            <i className="fa fa-clipboard" aria-hidden="true" />
            <span className="clipboard-counter">{clipboardCount}</span>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ClipboardManager;
