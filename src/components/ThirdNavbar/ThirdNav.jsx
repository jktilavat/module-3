import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import "./FirstNav.css";
import "./ThirdNav.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import GridViewIcon from "@mui/icons-material/GridView";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { Link } from "react-router-dom";

export default function ThirdAppBar() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const styles = (theme) => ({
    root: {
      background: "blue",
    },
    whiteColor: {
      color: "white",
    },
  });
  return (
    <Box className="thirdNavParent">
      {/* <Box className="firstDivParent">
        <select className="lang" name="lang" id="cars">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </Box> */}
      <Box className="firstDivParent">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            className="CategoryDropdown"
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem className="menuCategories" value="">
              <em className="emClass">
                <GridViewIcon className="gridIcon" />
                Browser All Categories
              </em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          {/* <FormHelperText>Without label</FormHelperText> */}
        </FormControl>
      </Box>

      <Box className="secondDivParent">
        <Button>
          <LocalFireDepartmentIcon className="fireIcon" />
          Hot Deals
        </Button>
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Shop</Button>
        <Button>Vendors</Button>
        <Button>Mega menu</Button>
        <Button>Blogs</Button>
        <Button>Pages</Button>
        <Link to={"/contact-us"}>
          <Button>Contact</Button>
        </Link>
      </Box>
      <Box className="thirdDivParent">
        <Box className="headPhone">
          <HeadsetMicIcon />
        </Box>
        <Box>
          <Box className="headPhoneText1">1900 - 888</Box>
          <Box className="headPhoneText2">24/7 Support Center</Box>
        </Box>
      </Box>
    </Box>
  );
}
