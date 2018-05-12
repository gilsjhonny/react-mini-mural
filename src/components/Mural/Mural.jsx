import React from "react";
import StickyNote from "../StickyNote";
import { uniqueId } from "lodash";
import "./styles.css";

class Mural extends React.Component {
  constructor(props) {
    super(props);
    this.mural = React.createRef();
  }

  componentDidMount() {
    this.mural.current.addEventListener("dblclick", this.handleDoubleClick);
    this.mural.current.addEventListener("click", this.handleClick);
  }

  handleClick = e => {
    console.log("Mural Clicked");
    if (e.target.dataset.type !== "sticky-note") {
      this.props.removeAllSelectedNotes();
      console.log("Remove All");
    }
  };

  handleDoubleClick = e => {
    console.log(e);
    const { x, y } = e;
    console.log(x, y);

    const noteToAdd = {
      text: "Some Note",
      color: "mistyrose",
      width: "100px",
      height: "100px",
      x: x,
      y: y,
      id: uniqueId()
    };

    this.props.addNewNote(noteToAdd);
    console.log("Double Clicked");
  };

  render() {
    const { notes, selectedNotes } = this.props;
    const StickyNotes = Object.values(notes).map(
      ({ id, text, color, width, height, x, y }) => {
        const selected = selectedNotes.hasOwnProperty(id);
        debugger;

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
      <div className="Mural" ref={this.mural}>
        {StickyNotes}
      </div>
    );
  }
}

export default Mural;
