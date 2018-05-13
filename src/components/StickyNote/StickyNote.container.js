import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import StickyNote from "./StickyNote";
import { setSelectedNote, pushSelectedNote } from "../../actions/mural-actions";
import { removeNote } from "../../actions/notes-actions";

const mapStateToProps = state => {
  return {
    multipleSelection: state.mural.multipleSelection
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setSelectedNote,
      pushSelectedNote,
      removeNote
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StickyNote);
