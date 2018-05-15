import { connect } from "react-redux";
import {
  addToClipboard,
  clearClipboard
} from "../../actions/clipboard-actions";
import ClipboardManager from "./ClipboardManager";
import { copyNote } from "../../actions/notes-actions";

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
    copyNote: note => {
      dispatch(copyNote(note));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClipboardManager);
