import React from "react";
import DemoButton from "./DemoButton";

function Second() {
  return (
    <div>
      <DemoButton
        dataText="click"
        clickText="second button disabled"
        buttonStyle="text"
        status={false}
      />
    </div>
  );
}
export default Second;
