import React from "react";
import { isEmpty } from "lodash";
import logo from "./logo.svg";
import "./styles.css";

class Welcome extends React.Component {
  render() {
    const { notes } = this.props;

    if (!isEmpty(notes)) return null;

    return (
      <div className="Welcome">
        <img src={logo} className="logo" alt="logo" />
        <div className="instructions">
          <p>
            Add Note: <span className="key">Double Click</span>
          </p>
          <p>
            Edit Note: <span className="key">Click</span>
          </p>
          <p>
            Multiple Selection: <span className="key">Shift</span> +{" "}
            <span className="key">V</span>
          </p>
          <p>
            Copy Notes: <span className="key">Ctrl</span> +{" "}
            <span className="key">C</span>
          </p>
          <p>
            Paste Notes: <span className="key">Ctrl</span> +{" "}
            <span className="key">V</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Welcome;
