import React from "react";
import classes from "../Styles/Navbar.module.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
function Navbar({ menuItem, logo }) {
  return (
    <div className={classes.Navbar}>
      <div className={classes.section1}>
        <img src={logo} alt="Logo" />
        <h1>Medical Darpan</h1>
      </div>
      <ul className={classes.section2}>
        {menuItem.map((data) => (
          <li>
            <a href={`#${data}`}>{data}</a>
          </li>
        ))}
      </ul>
      <div className={classes.section3}>
        <h4>Login</h4>
        <AccountCircleOutlinedIcon sx={{ alignSelf: "center", ml: "0.5rem" }} />
      </div>
    </div>
  );
}

export default Navbar;
