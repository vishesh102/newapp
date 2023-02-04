import React from "react";
import { Input } from "@mui/material";
function InputComponent({ placeholder, type, onchange, value }) {
  return (
    <div>
      <Input
        value={value}
        sx={{ m: 2 }}
        placeholder={placeholder}
        type={type}
        onChange={onchange}
      />
    </div>
  );
}

export default InputComponent;
