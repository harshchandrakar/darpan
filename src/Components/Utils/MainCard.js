import React from "react";
import classes from "../Styles/MainCard.module.css";
import SendIcon from "@mui/icons-material/Send";
function MainCard({ name, pic, price, companyname, address }) {
  return (
    <div className={classes.MainCard}>
      <div className={classes.details}>
        <img src={pic} alt="medicine" />
        <div className={classes.pricing}>
          <h5>{name}</h5>
          <p className={classes.price}>
            <span>Rs {price}</span> / stripe
          </p>
          <br />
          <h5>{companyname}</h5>
          <p className={classes.address}>{address}</p>
        </div>
      </div>

      <button className={classes.btn}>
        {" "}
        <SendIcon sx={{ mb: "-0.2rem", transform: "rotate(-45deg)" }} /> Contact
        Supplier
      </button>
    </div>
  );
}

export default MainCard;
