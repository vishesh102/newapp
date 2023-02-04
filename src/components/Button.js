import React from "react";
import { Button } from "@mui/material";
function ButtonComponent({ onClick, inActive, text, styles, type }) {
  return (
    <div>
      <Button
        type={type}
        disabled={inActive}
        variant={styles}
        onClick={() => {
          onClick();
        }}
      >
        {text}
      </Button>
    </div>
  );
}

export default ButtonComponent;
