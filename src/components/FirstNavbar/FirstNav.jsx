import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./FirstNav.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PrimarySearchAppBar from "../SecondNav/PrimarySearchAppBar";
import ThirdAppBar from "../ThirdNavbar/ThirdNav";

export default function ButtonAppBar() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box className="FirstNavParent">
        <Box className="FirstBoxParent">
          <Button color="inherit">About Us</Button>
          <span className="btnLine">|</span>
          <Button color="inherit">My Account</Button>
          <span className="btnLine">|</span>
          <Button color="inherit">Wishlist</Button>
          <span className="btnLine">|</span>
          <Button color="inherit">Order Tracking</Button>
          <span className="btnLine">|</span>
        </Box>

        {/* <Button>My account</Button>
          <Button>Wishlist</Button>
          <Button>Order Traking</Button> */}
        {/* <MenuIcon /> */}

        <Box
          className="secondBoxParent"
          sx={{ display: "flex", width: "33.3%" }}
        >
          Get great devices up to 50% off
          <span className="viewDetail" style={{ marginLeft: "5px" }}>
            {"View Details"}
          </span>
        </Box>
        <Box
          className="thirdBoxParent"
          sx={{ display: "flex", width: "33.3%" }}
        >
          <Box className="needHelpCallParent">
            Need help? Call us
            <span className="needHelpCall">{"(+91)00000-00000"}</span>
          </Box>

          <select className="lang" name="lang" id="cars">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>

          <select className="lang" name="lang" id="cars">
            <option value="volvo">INR</option>
            <option value="saab">USD</option>
            <option value="opel">DLR</option>
          </select>
        </Box>
      </Box>
      <PrimarySearchAppBar />
      <ThirdAppBar />
    </>
  );
}
