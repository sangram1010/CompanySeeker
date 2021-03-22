import React from "react";

import { Button, TextField } from "@material-ui/core";
export default function Header() {
  return (
    <div style={{ padding: "1%", fontSize: "calc(1px + 2vmin)" }}>
      <div style={{ padding: "1%" }}>
        <TextField
          id="outlined-basic"
          label="Please enter the keyword to search"
          fullWidth
          variant="outlined"
        />
      </div>
      <Button variant="contained" color="primary">
        Search
      </Button>
    </div>
  );
}
