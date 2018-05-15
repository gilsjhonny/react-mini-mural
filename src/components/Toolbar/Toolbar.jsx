import React from "react";
import ClipboardManager from "../ClipboardManager";
import ColorPicker from "./ColorPicker";
import "./styles.css";

class Toolbar extends React.Component {
  render() {
    return (
      <div className="Toolbar">
        <ColorPicker />
        <ClipboardManager />
      </div>
    );
  }
}

export default Toolbar;
