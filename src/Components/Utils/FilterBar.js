import React from "react";
import classes from "../Styles/FilterBar.module.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
function FilterBar({ heading, qty, tags }) {
  return (
    <div className={classes.FilterBar}>
      <div className={classes.heading}>
        <h3>{heading}</h3>
        <h4>({qty} products)</h4>
      </div>
      {tags.length != 0 && (
        <div className={classes.tags}>
          {tags.map((data) => (
            <div className={classes.tag}>
              <h5>{data}</h5>
              <CloseOutlinedIcon sx={{ alignSelf: "center" }} fontSize="20px" />
            </div>
          ))}
          <a className={classes.link}>Remove all</a>
        </div>
      )}
    </div>
  );
}

export default FilterBar;
