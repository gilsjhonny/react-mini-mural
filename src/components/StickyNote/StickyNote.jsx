import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./styles.css";
class StickyNote extends React.Component {
  static propTypes = {
    color: PropTypes.number.string,
    height: PropTypes.number.string,
    width: PropTypes.number.string,
    x: PropTypes.number.string,
    y: PropTypes.number.string,
    selected: PropTypes.bool
  };

  static defaultProps = {
    text: "",
    color: "#b1d6d0",
    height: "100px",
    width: "100px",
    x: "0",
    y: "0",
    selected: false
  };

  render() {
    const { text, color, height, width, x, y, selected } = this.props;
    const StickyNoteClassnames = classnames("StickyNote", {
      selected: selected
    });

    return (
      <div
        className={StickyNoteClassnames}
        style={{
          width,
          height,
          transform: `translate(${x}px,${y}px)`
        }}
      >
        <div className="container" style={{ background: color }}>
          {text}
        </div>
      </div>
    );
  }
}

export default StickyNote;
