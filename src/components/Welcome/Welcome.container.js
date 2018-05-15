import { connect } from "react-redux";
import Welcome from "./Welcome";

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps, null)(Welcome);
