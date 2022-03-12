import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const NavBarStyle = {
  //   backgroundColor: "red",
  height: 50,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 60px 0 60px",
};

const NavBarMenuStyle = {
  //   backgroundColor: "green",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
};

const NavBarMenuListStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  //   backgroundColor: "yellow",
  width: "500px",
};

const MetaEduTypo = {
  fontWeight: "bold",
  fontSize: 25,
};

const HelloEduTypo = {
  fontWeight: "bold",
};

const MetaEduStyle = {
  display: "flex",
  alignItems: "center",
};

const HelloEduStyle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "black",
  color: "white",
  padding: "10px 20px 10px 20px",
  borderRadius: "50px",
};

const MenuTypo = {
  color: "black",
  textTransform: "capitalize",
  fontSize: 16,
};

export default function NavigationBar() {
  return (
    <Box sx={NavBarStyle}>
      <Box sx={NavBarMenuStyle}>
        <Box sx={MetaEduStyle}>
          <Box>
            <Typography sx={MetaEduTypo}>MetaEducation</Typography>
          </Box>
        </Box>
        <Box sx={NavBarMenuListStyle}>
          <Box>
            <Link to="/q1">
              <Button variant="text" sx={MenuTypo}>
                Home
              </Button>
            </Link>
          </Box>
          <Box>
            <Link to="/q1/profile">
              <Button variant="text" sx={MenuTypo}>
                Profile
              </Button>
            </Link>
          </Box>
          <Box>
            <Link to="/q1/company">
              <Button variant="text" sx={MenuTypo}>
                Company
              </Button>
            </Link>
          </Box>
          <Box>
            <Link to="/q1/services">
              <Button variant="text" sx={MenuTypo}>
                Services
              </Button>
            </Link>
          </Box>
          <Box>
            <Link to="/q1/collaboration">
              <Button variant="text" sx={MenuTypo}>
                Collab
              </Button>
            </Link>
          </Box>
        </Box>
        <Box sx={HelloEduStyle}>
          <Typography sx={HelloEduTypo}>Hello Educationers!</Typography>
        </Box>
      </Box>
    </Box>
  );
}
