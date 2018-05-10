import React from "react";
import StickyNote from "../StickyNote";

class Mural extends React.Component {
  render() {
    return (
      <div>
        <StickyNote />
        <StickyNote />
      </div>
    );
  }
}

export default Mural;
