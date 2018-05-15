import React from "react";
import PropTypes from "prop-types";
import Color from "color";
import classnames from "classnames";
import "./styles.css";

class ColorBox extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
    color: PropTypes.string.isRequired
  };

  handleClick = e => {
    const color = e.target.dataset.color;
    this.props.onClick(color);
  };

  getBorderStyle = () => {
    const { color, active } = this.props;
    let border;

    if (active) {
      const borderColor = Color(color)
        .darken(0.4)
        .desaturate(0.2);
      border = `2px solid ${borderColor}`;
    } else {
      border = "1px solid #bbbbbb";
    }

    return border;
  };

  render() {
    const { color, active } = this.props;
    const className = classnames("colorBox", { activeBox: active });

    return (
      <div
        className={className}
        onClick={this.handleClick}
        data-color={color}
        style={{ background: color, border: this.getBorderStyle() }}
      />
    );
  }
}

export default ColorBox;
