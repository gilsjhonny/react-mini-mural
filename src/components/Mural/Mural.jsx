import React from "react";
import StickyNote from "../StickyNote";
import "./styles.css";
import ClipboardManager from "../ClipboardManager";

class Mural extends React.Component {
  constructor(props) {
    super(props);
    this.mural = React.createRef();
  }

  componentDidMount() {
    this.mural.current.addEventListener("dblclick", this.handleDoubleClick);
    this.mural.current.addEventListener("click", this.handleClick);
    this.mural.current.addEventListener("keydown", this.handleKeyDown);
    this.mural.current.addEventListener("keyup", this.handleKeyUp);
  }

  handleClick = e => {
    if (e.target.isEqualNode(this.mural.current)) {
      this.props.removeAllSelectedNotes();
    }
  };

  handleDoubleClick = e => {
    if (!e.target.isEqualNode(this.mural.current)) {
      return;
    }

    const { x, y } = e;
    const noteToAdd = {
      text: "Some Note",
      color: "#ffe4e1",
      width: "100px",
      height: "100px",
      x: x,
      y: y
    };

    this.props.addNewNote(noteToAdd);
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

export default Mural;
