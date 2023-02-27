import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import errLogo from "./ErrImg2.gif";
import "./errPage.css";

function errPage() {
  return (
    <div>
      <div className="mainDiv">
        <img className="imgGif" src={errLogo} alt="loading..." />
      </div>
      <div className="btnWrp">
        <Link to={"/"}>
          <Button className="btnCls">Back to home page</Button>
        </Link>
      </div>
    </div>
  );
}

export default errPage;
