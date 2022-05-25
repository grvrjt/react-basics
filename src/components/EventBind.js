import React, { Component } from "react";
class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    this.clickHandler3 = this.clickHandler3.bind(this);
  }

  clickHandler1() {
    this.setState({
      message: "Good Bye 1",
    });
  }

  clickHandler2() {
    this.setState({
      message: "Good Bye 2",
    });
  }

  clickHandler3() {
    this.setState({
      message: "Good Bye 3",
    });
  }

  clickHandler4 = () => {
    this.setState({
      message: "Good Bye 4",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler1.bind(this)}>Click1</button>
        <button onClick={() => this.clickHandler2()}>Click2</button>
        <button onClick={this.clickHandler3}>Click3</button>
        <button onClick={this.clickHandler4}>Click4</button>
      </div>
    );
  }
}

export default EventBind;
