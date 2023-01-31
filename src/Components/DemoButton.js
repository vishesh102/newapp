import React from "react";
import { Button } from "@mui/material";

function DemoButton(props) {
  const text = props.dataText.toLowerCase();
  return (
    <div>
      <Button variant={props.buttonTypes}>{text}</Button>
    </div>
  );
}

export default DemoButton;
