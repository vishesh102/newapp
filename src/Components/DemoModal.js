import React from "react";
import { Modal } from "@mui/material";
import DemoButton from "./DemoButton";
import { Box } from "@mui/system";
import { Typography } from "@mui/material/styles/createTypography";

function DemoModal() {
  return (
    <div>
      <DemoButton onClick={handleOpen}>Open modal</DemoButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default DemoModal;
