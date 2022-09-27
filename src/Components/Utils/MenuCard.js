import React, { useState } from "react";
import classes from "../Styles/MenuCard.module.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
function MenuCard({ heading, options }) {
  const [selected, setSelected] = useState(2);

  return (
    <ul className={classes.MenuCard}>
      <li className={classes.heading}>{heading}</li>
      {options.map((data, id) => (
        <li
          key={id}
          className={selected == id && classes.sel}
          onClick={() => {
            setSelected(id);
          }}
        >
          <a href="#data">
            <p>{data}</p>
            {selected == id && (
              <CloseOutlinedIcon
                sx={{ mb: "-0.5rem", color: "white", alignSelf: "center" }}
                fontSize="20px"
              />
            )}{" "}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default MenuCard;
