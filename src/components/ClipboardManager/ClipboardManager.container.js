import { connect } from "react-redux";
import {
  addToClipboard,
  clearClipboard
} from "../../actions/clipboard-actions";
import ClipboardManager from "./ClipboardManager";

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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClipboardManager);
