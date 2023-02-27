import { Button } from "@mui/material";
import React from "react";
import msCart from "./missing cart.png";
import "./missingCart.css";

function MissinngCart() {
  return (
    <div className="divA">
      <img
        style={{ height: "45vh" }}
        className="msCartImg"
        src={msCart}
        alt="missing your cart"
      />
      <div>
        <h1>Missing Cart items?</h1>
        <h3>Login to see the items you added previously</h3>
        <Button className="btnLogin">Login</Button>
      </div>
    </div>
  );
}

export default MissinngCart;
