import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Mural from "./Mural";
import { addNote, deleteNote } from "../../actions/notes-actions";
import {
  clearSelectedNotes,
  enableMultipleSelection,
  disableMultipleSelection
} from "../../actions/mural-actions";

const mapStateToProps = ({ notes, mural }) => ({
  notes: notes,
  selectedNotes: mural.selected_notes
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addNote,
      deleteNote,
      clearSelectedNotes,
      enableMultipleSelection,
      disableMultipleSelection
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Mural);
