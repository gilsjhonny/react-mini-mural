import React from "react";
import classnames from "classnames";
import "./styles.css";

class ColorBox extends React.Component {
  handleClick = e => {
    const color = e.target.dataset.color;
    this.props.onClick(color);
  };

  render() {
    const { color, active } = this.props;
    const className = classnames("colorBox", { activeBox: active });

    return (
      <div
        className={className}
        onClick={this.handleClick}
        data-color={color}
        style={{ background: color }}
      />
    );
  }
}

export default ColorBox;
