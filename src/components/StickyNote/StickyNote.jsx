import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
class StickyNote extends React.Component {
  static propTypes = {
    color: PropTypes.number.string,
    height: PropTypes.number.string,
    width: PropTypes.number.string,
    x: PropTypes.number.string,
    y: PropTypes.number.string
  };

  static defaultProps = {
    text: "",
    color: "#b1d6d0",
    height: "100px",
    width: "100px",
    x: "0",
    y: "0"
  };

  render() {
    const { text, color, height, width, x, y } = this.props;
    return (
      <div
        className="StickyNote"
        style={{
          width,
          height,
          background: color,
          transform: `translate(${x}px,${y}px)`
        }}
      >
        {text}
      </div>
    );
  }
}

export default StickyNote;
