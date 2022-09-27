import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { Search } from "@mui/icons-material";

import classes from "../Styles/SearchBar.module.css";

function SearchBar(props) {
  return (
    <div>
      <TextField
        fullWidth
        id="standard-bare"
        variant="outlined"
        placeholder={props.placeholder}
        sx={{ borderRadius: "0px" }}
        InputProps={{
          className: classes.input1,
          startAdornment: (
            <IconButton sx={{ width: "60px", height: "32px" }}>
              <Search sx={{ fontSize: "30px", color: "#223959" }} />
            </IconButton>
          ),
          endAdornment: (
            <IconButton
              sx={{
                fontSize: "16px",
                background: "#00a69a",
                color: "white",
                padding: "0.7rem",
                borderRadius: "0px",
                opacity: "1",
                marginRight: "-1rem",
                ":hover": {
                  background: "#00a69a",
                },
              }}
              className={classes.searchbtn}
            >
              Search
            </IconButton>
          ),
        }}
      />
    </div>
  );
}

export default SearchBar;
