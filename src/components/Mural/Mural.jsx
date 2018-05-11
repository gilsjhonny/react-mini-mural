import React from "react";
import StickyNote from "../StickyNote";
import "./styles.css";

class Mural extends React.Component {
  constructor(props) {
    super(props);
    this.mural = React.createRef();
  }

  componentDidMount() {
    this.mural.current.addEventListener("dblclick", this.handleDoubleClick);
    console.log(this.mural.current);
  }

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
      y: y
    };

    this.props.addNewNote(noteToAdd);
    console.log("Double Clicked");
  };

  render() {
    const { notes } = this.props;
    const StickyNotes = notes.map(({ text, color, width, height, x, y }) => (
      <StickyNote
        text={text}
        color={color}
        width={width}
        height={height}
        x={x}
        y={y}
      />
    ));

    return (
      <div className="Mural" ref={this.mural}>
        {StickyNotes}
      </div>
    );
  }
}

export default Mural;
