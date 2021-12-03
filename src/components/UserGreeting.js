import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
      
    return this.state.isLoggedIn && <div>Welcome Gaurav</div>;

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Gaurav</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Gaurav</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <>{message}</>;

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Gaurav</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}

export default UserGreeting;
