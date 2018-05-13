import React from "react";
import "./styles.css";

class ClipboardManager extends React.Component {
  constructor(props) {
    super(props);
    this.clipboardManager = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("copy", this.handleCopy);
    window.addEventListener("paste", this.handlePaste);
  }

  handleCopy = e => {
    const { selectedNotes, addToClipboard } = this.props;
    if (Object.keys(selectedNotes).length) addToClipboard(selectedNotes);
  };

  handlePaste = e => {
    const { clearClipboard } = this.props;
    clearClipboard();
  };

  render() {
    const { clipboard } = this.props;
    const clipboardCount = Object.values(clipboard).length;

    return (
      <div>
        {!!clipboardCount ? (
          <div
            tabIndex="0"
            className="ClipboardManager"
            ref={this.clipboardManager}
          >
            <div className="clipboard-icon">
              <i className="fa fa-clipboard" aria-hidden="true" />
              <span className="clipboard-counter">{clipboardCount}</span>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ClipboardManager;
