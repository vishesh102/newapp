import React, { useState } from "react";
import ButtonComponent from "./Button";

function Counter() {
  const incNum = (e) => {
    setnum(++num);
  };

  const decNum = (e) => {
    setnum(--num);
  };
  let [num, setnum] = useState(0);
  return (
    <div>
      <h2>Counter</h2>
      <ButtonComponent styles={"contained"} text="+" onClick={incNum} />
      <div>{num}</div>
      <ButtonComponent styles={"contained"} text="-" onClick={decNum} />
    </div>
  );
}

export default Counter;
