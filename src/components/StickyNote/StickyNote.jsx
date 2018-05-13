import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Color from "color";
import FontAwesomeButton from "../FontAwesomeButton";
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
    this.textarea = React.createRef();
    this.state = { editMode: false };
  }

  componentDidMount() {
    this.textarea.current.addEventListener("click", this.handleClick);
    this.textarea.current.addEventListener("dblclick", this.handleDoubleClick);
    this.textarea.current.addEventListener("input", this.handleInput);
  }

  handleClick = e => {
    const {
      id,
      setSelectedNote,
      pushSelectedNote,
      multipleSelection
    } = this.props;

    if (multipleSelection) {
      pushSelectedNote(id);
    } else {
      setSelectedNote(id);
    }
  };

  handleDoubleClick = () => {
    this.setState({ editMode: true });
    this.textarea.current.focus();
  };

  handleDelete = () => {
    const { id, removeNote } = this.props;
    console.log("delete");
    removeNote(id);
  };

  handleOnBlur = () => {
    console.log("On Blur");
    this.setState({ editMode: false });
  };

  handleInput = () => {
    console.log("Inputting");
  };

  render() {
    const { editMode } = this.state;
    const { id, text, color, height, width, x, y, selected } = this.props;
    const StickyNoteClassnames = classnames("StickyNote", {
      selected: selected,
      "edit-mode": editMode
    });
    const textColor = Color(color).darken(0.2);
    const boxShadowColor = Color(color).darken(0.1);

    return (
      <div
        className={StickyNoteClassnames}
        style={{
          width,
          height,
          transform: `translate(${x}px,${y}px)`,
          zIndex: selected ? "999999" : id
        }}
      >
        <div
          className="container"
          style={{
            background: color,
            boxShadow: `0px 0px 2px ${boxShadowColor}`
          }}
          id={id}
          data-type="sticky-note"
        >
          <p
            className="edit-area"
            contentEditable={editMode}
            onBlur={this.handleOnBlur}
            ref={this.textarea}
            style={{ color: textColor, userSelect: editMode ? "text" : "none" }}
          >
            {text}
          </p>

          {selected && (
            <FontAwesomeButton
              faClass={"fa fa-trash-o"}
              handleOnClick={this.handleDelete}
            />
          )}
        </div>
      </div>
    );
  }
}

export default StickyNote;
