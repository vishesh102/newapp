import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";

function DemoButton(props) {
  const [disable, setDisable] = useState(false);

  if (disable == true) {
    setTimeout(() => {
      setDisable(false);
    }, 3000);
  }

  return (
    <div>
      <Button
        onClick={() => {
          setDisable(!props.status);
          console.log(props.clickText);
        }}
        variant={props.buttonStyle}
        disabled={disable}
      >
        {props.dataText.toLowerCase()}
      </Button>
    </div>
  );
}

export default DemoButton;
