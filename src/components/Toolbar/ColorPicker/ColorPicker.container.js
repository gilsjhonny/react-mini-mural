import { connect } from "react-redux";
import ColorPicker from "./ColorPicker.jsx";
import { setColor } from "../../../actions/toolbar-actions";

const mapStateToProps = state => {
  return {
    currentColor: state.toolbar["current_color"]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setColor: color => {
      dispatch(setColor(color));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);
