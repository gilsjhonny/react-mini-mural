import { connect } from "react-redux";
import {
  addToClipboard,
  clearClipboard
} from "../../actions/clipboard-actions";
import ClipboardManager from "./ClipboardManager";
import { addNote } from "../../actions/notes-actions";

const mapStateToProps = state => {
  return {
    notes: state.notes,
    selectedNotes: state.mural["selected_notes"],
    clipboard: state.clipboard
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToClipboard: notes => {
      dispatch(addToClipboard(notes));
    },
    clearClipboard: () => {
      dispatch(clearClipboard());
    },
    addNote: note => {
      dispatch(addNote(note));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClipboardManager);
