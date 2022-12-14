import React from "react";
import classes from "../Styles/Path.module.css";
function Path({ path }) {
  return (
    <ul className={classes.Path}>
      {path.map((data) => (
        <li>
          <a href="#data">{data}</a>>
        </li>
      ))}
    </ul>
  );
}

export default Path;
