import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Mural from "./Mural";
import { addNewNote, removeNote } from "../../actions/notes-actions";
import {
  removeAllSelectedNotes,
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
      addNewNote,
      removeNote,
      removeAllSelectedNotes,
      enableMultipleSelection,
      disableMultipleSelection
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Mural);
