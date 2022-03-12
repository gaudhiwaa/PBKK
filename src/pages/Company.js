import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AboutUsDescBox = {
  display: "flex",
  mt: "60px",
  mb: "50px",
  // justifyContent: 'center',
  // backgroundColor: 'red'
};

const WeAreGameTypo = {
  fontWeight: "bold",
  fontSize: "25px",
  mb: "20px",
};

const AboutUsBox = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  mt: "100px",
};

const AboutUsTypo = {
  fontSize: "30px",
  fontWeight: "bold",
};

function Company() {
  return (
    <>
      <Box sx={AboutUsBox}>
        <Typography sx={AboutUsTypo}>About Us</Typography>
        <Typography>– MetaEducation –</Typography>
      </Box>
      <Box sx={AboutUsDescBox}>
        <Box>
          <img
            src="https://immersionvr.co.uk/wp-content/uploads/2020/01/schoolboy-vr-headset.jpg"
            alt="a-Pngtreea-blue-geometric-virtual-reality-creative-5008121"
            height="90%"
          />
        </Box>
        <Box sx={{ marginLeft: "20px", mt: "15px" }}>
          <Typography sx={WeAreGameTypo}>Game Changer of Education</Typography>
          <Typography sx={{ textAlign: "justify" }}>
            MetaEducation is a company engaged in the development of the
            metaverse in the field of education. Learning in the metaverse can
            connect learners from all over the world and empower them to
            interact in meaningful ways while providing unprecedented
            accessibility. That learning is more interactive and impactful, by
            allowing us to simulate everything from a conversation to a surgery.
          </Typography>
          <Typography sx={{ mt: "20px", textAlign: "justify" }}>
            Virtual reality can improve education by providing students with
            memorable and immersive experiences that would otherwise not be
            possible. What’s more, it can all take place within the classroom.
            VR is accessible to every student and can be easily monitored by
            teachers. Virtual experiences have the power to engage and inspire
            students in a unique and powerful way.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Company;
