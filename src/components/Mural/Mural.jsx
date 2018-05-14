import React from "react";
import PropTypes from "prop-types";
import StickyNote from "../StickyNote";
import ClipboardManager from "../ClipboardManager";
import { pixelsToInt } from "../../utils";
import "./styles.css";

class Mural extends React.Component {
  constructor(props) {
    super(props);
    this.mural = React.createRef();
  }

  componentDidMount() {
    this.mural.current.addEventListener("click", this.handleClick);
    this.mural.current.addEventListener("dblclick", this.handleDoubleClick);
    this.mural.current.addEventListener("keydown", this.handleKeyDown);
    this.mural.current.addEventListener("keyup", this.handleKeyUp);
  }

  handleClick = e => {
    if (e.target.isEqualNode(this.mural.current)) {
      this.props.clearSelectedNotes();
    }
  };

  handleDoubleClick = e => {
    if (!e.target.isEqualNode(this.mural.current)) {
      return;
    }

    const { x, y } = e;
    const width = "140px";
    const height = "140px";

    const noteToAdd = {
      text: "",
      color: "#ffe4e1",
      width,
      height,
      x: x - pixelsToInt(width) / 2,
      y: y - pixelsToInt(height) / 2
    };

    this.props.addNote(noteToAdd);
  };

  handleKeyDown = e => {
    if (e.key === "Shift") {
      this.props.enableMultipleSelection();
    }
  };

  handleKeyUp = e => {
    if (e.key === "Shift") {
      this.props.disableMultipleSelection();
    }
  };

  render() {
    const { notes, selectedNotes } = this.props;
    const StickyNotes = Object.values(notes).map(
      ({ id, text, color, width, height, x, y }) => {
        const selected = selectedNotes.hasOwnProperty(id);

        return (
          <StickyNote
            id={id}
            text={text}
            color={color}
            width={width}
            height={height}
            x={x}
            y={y}
            selected={selected}
          />
        );
      }
    );

    return (
      <div id="Mural" className="Mural" ref={this.mural} tabIndex="-1">
        {StickyNotes}
        <ClipboardManager />
      </div>
    );
  }
}

Mural.propTypes = {
  notes: PropTypes.object,
  selectedNotes: PropTypes.object,
  addNote: PropTypes.func,
  enableMultipleSelection: PropTypes.func,
  disableMultipleSelection: PropTypes.func,
  clearSelectedNotes: PropTypes.func
};

export default Mural;
