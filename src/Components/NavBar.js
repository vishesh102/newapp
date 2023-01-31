import React from "react";
import { AppBar } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Typography variant="title" color="inherit">
          React & Material-UI Sample Application
        </Typography>
      </AppBar>
    </div>
  );
};
export default NavBar;
