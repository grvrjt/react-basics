import React, { Component } from "react";
class ClassClick extends Component {
  clickHandler() {
    console.log("Click from class");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click the class</button>
      </div>
    );
  }
}

export default ClassClick;
