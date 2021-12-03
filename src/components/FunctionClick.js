import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Click from the function");
  }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
