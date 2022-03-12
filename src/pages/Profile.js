import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AboutUsBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  mt: "125px",
};

function Profile() {
  return (
    <>
      <Box sx={AboutUsBox}>
        <Typography>About us</Typography>
        <Typography
          sx={{
            width: "400px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          We're on a mission to make education in the world more Fun
        </Typography>
        <Typography
          sx={{ width: "400px", textAlign: "center", fontSize: "15px" }}
        >
          Our mission is to empower any students to learn better, faster. We
          eradicate boredom in education, making students happier.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: "100px",
          flexDirection: "column",
        }}
      >
        <img
          src="https://cdn.langit7.id/foto/750/langit7/berita/2022/02/23/1/11933/mengenal-ivy-league-8-universitas-terbaik-di-amerika-psn.jpeg"
          width="350px"
          alt="partners"
        />
        <Typography
          sx={{
            fontSize: "15px",
            width: "350px",
            textAlign: "center",
            mt: "20px",
          }}
        >
          The world's best universities use MetaEducation to build their
          education system.
        </Typography>
      </Box>
      <Box sx={{ mt: "70px", display: "flex", justifyContent: 'space-between'}}>
        <Box>
          <Typography sx={{ fontWeight: "bold", fontSize: "30px" }}>
            Our Ultimate Goal
          </Typography>
          <Typography
            sx={{ fontSize: "13px", width: "300px", textAlign: "justify" }}
          >
            We aim high trying to design the most effective and fun tool for
            learning in Metaverse, for students and teachers. MetaEducation
            started in 2035, to unify education and Metaverse. Since then, we've
            become a community of over 2M school and universities from every
            corner of the world.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "13px", mb: '10px'}}>
            We plan on doing all that cultivating our values :
          </Typography>
          <Typography sx={{ fontSize: "13px" }}>
            {" "}
            <CheckCircleIcon sx={{ fontSize: "15px" }} />
            Students Oriented. We tried to make the best tech for students.
          </Typography>
          <Typography sx={{ fontSize: "13px" }}>
            {" "}
            <CheckCircleIcon sx={{ fontSize: "15px" }} />
            Accessibility. We make a tools with high accessibility.
          </Typography>
          <Typography sx={{ fontSize: "13px" }}>
            {" "}
            <CheckCircleIcon sx={{ fontSize: "15px" }} />
            Freedom. We work from anywhere in the world.
          </Typography>
          <Typography sx={{ fontSize: "13px" }}>
            {" "}
            <CheckCircleIcon sx={{ fontSize: "15px" }} />
            Autonomy. We want to create a safe, high-trust team.
          </Typography>
          <Typography sx={{ fontSize: "13px" }}>
            {" "}
            <CheckCircleIcon sx={{ fontSize: "15px" }} />
            Excellence. We're aiming high, and we know it.
          </Typography>
        </Box>
        <Box>
          <Box>
            <Typography sx={{fontWeight: 'bold'}}>2M</Typography>
            <Typography sx={{ fontSize: "13px" }}>Education partners around the world</Typography>
          </Box>
          <Box>
            <Typography sx={{fontWeight: 'bold', mt: '10px'}}>20M+</Typography>
            <Typography sx={{ fontSize: "13px" }}>Students from every corner of the world.</Typography>
          </Box>
          <Box>
            <Typography sx={{fontWeight: 'bold', mt: '10px'}}>2k+</Typography>
            <Typography sx={{ fontSize: "13px" }}>Meta Engineer.</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Profile;
