import { connect } from "react-redux";
import Mural from "./Mural";
import { addNote } from "../../actions/notes-actions";
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
  return {
    addNote: note => {
      dispatch(addNote(note));
    },
    clearSelectedNotes: () => {
      dispatch(clearSelectedNotes());
    },
    enableMultipleSelection: () => {
      dispatch(enableMultipleSelection());
    },
    disableMultipleSelection: () => {
      dispatch(disableMultipleSelection());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mural);
