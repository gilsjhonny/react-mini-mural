import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
class StickyNote extends React.Component {
  static propTypes = {
    color: PropTypes.number.string,
    height: PropTypes.number.string,
    width: PropTypes.number.string
  };

  static defaultProps = {
    color: "#b1d6d0",
    height: "100px",
    width: "100px",
    top: "0",
    left: "0"
  };

  render() {
    const { color, height, width, top, left } = this.props;
    return (
      <div
        className="StickyNote"
        style={{
          width,
          height,
          background: color,
          transform: `translate(${top},${left})`
        }}
      >
        Some Note
      </div>
    );
  }
}

export default StickyNote;
