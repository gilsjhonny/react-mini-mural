import React from "react";
import ColorBox from "./ColorBox";
import "./styles.css";

class ColorPicker extends React.Component {
  pickColor = color => {
    this.props.setColor(color);
  };

  render() {
    const { currentColor } = this.props;
    const colors = ["#ffe4e1", "#e3cbed", "#c4e9ff", "#deffce"];
    const colorBoxes = colors.map(color => (
      <ColorBox
        color={color}
        onClick={this.pickColor}
        active={currentColor === color}
      />
    ));

    return <div className="ColorPicker">{colorBoxes}</div>;
  }
}

export default ColorPicker;
