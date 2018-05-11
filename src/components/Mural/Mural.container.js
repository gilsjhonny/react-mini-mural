import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Mural from "./Mural";

import { addNewNote, removeNote } from "../../actions/notes-actions";

const mapStateToProps = ({ notes }) => ({ notes: notes });

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addNewNote,
      removeNote
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Mural);
