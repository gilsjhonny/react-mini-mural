import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import StickyNote from "./StickyNote";
import { addSelectedNote } from "../../actions/mural-actions";

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addSelectedNote
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(StickyNote);
