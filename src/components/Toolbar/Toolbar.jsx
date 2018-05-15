import React from "react";
import ColorPicker from "./ColorPicker";
import "./styles.css";

class Toolbar extends React.Component {
  render() {
    return (
      <div className="Toolbar">
        <ColorPicker />
      </div>
    );
  }
}

export default Toolbar;
