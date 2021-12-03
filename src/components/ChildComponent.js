import React from "react";

function ChildComponent({ parentHandler }) {
  return (
    <div>
      <button onClick={()=>parentHandler('Child')}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
