import React from "react";
import DemoButton from "./DemoButton";
import { useState } from "react";

function First() {
  // handleClick = () => {
  //   console.log("clicked");
  // };

  return (
    <div>
      <DemoButton
        clickText="first button disabled"
        status={false}
        buttonStyle="contained"
        dataText="submit"
      ></DemoButton>
    </div>
  );
}

export default First;
