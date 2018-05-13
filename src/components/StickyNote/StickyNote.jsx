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
    selected: PropTypes.bool,
    addSelectedNote: PropTypes.func
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

  constructor(props) {
    super(props);
    this.note = React.createRef();
  }

  componentDidMount() {
    this.note.current.addEventListener("click", this.handleClick);
  }

  handleClick = e => {
    const id = e.target.id;

    if (this.props.multipleSelection) {
      this.props.pushSelectedNote(id);
    } else {
      this.props.setSelectedNote(id);
    }
  };

  render() {
    const { id, text, color, height, width, x, y, selected } = this.props;
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
        <div
          className="container"
          style={{ background: color }}
          ref={this.note}
          id={id}
          data-type="sticky-note"
        >
          {text}
        </div>
      </div>
    );
  }
}

export default StickyNote;
