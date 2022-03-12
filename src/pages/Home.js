import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import ActionAreaCard from "./components/ActionAreaCard";
import SimpleAccordion from "./components/SimpleAccordion";
import CountrySelect from "./components/CountrySelect";

const BoxHomeStyle = {
  // backgroundColor: "#F6B49A",
  display: "flex",
  justifyContent: "center",
  // width: '100%',
  // height: '400px',
  mt: "50px",
  // borderRadius: "25px",
};

const CardList = {
  display: "flex",
  justifyContent: "space-between",
  mt: "100px",
  maxWidth: '100%',
  // backgroundColor: 'yellow'
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

const CoolThingsBox = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  // mt: "100px",
};

const CoolThingsTypo = {
  fontSize: "30px",
  fontWeight: "bold",
};

const HowCanWeBox = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  mt: "120px",
  mb: "60px",
};

const HowCanWeTypo = {
  fontSize: "30px",
  fontWeight: "bold",
};

const PhoneBox = {
  display: "flex",
};

const ContactUsBox ={
  display: "flex",
  // justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  mt: "120px",
  mb: "60px",
}

const ContactUsTypo = {
  fontSize: "30px",
  fontWeight: "bold",
};

export default function Home() {
  return (
    <>
      <Box sx={BoxHomeStyle}>
        <img
          src="https://www.weareresonate.com/wp-content/uploads/2021/04/Harvard-University.jpg"
          alt="wallpaper"
          width="100%"
          borderRadius="200px"
          // sx={{borderRadius: '200px', height: '500px'}}
        />
      </Box>
      <Box>
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
            <Typography sx={WeAreGameTypo}>
              Game Changer of Education
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              MetaEducation is a company engaged in the development of the
              metaverse in the field of education. Learning in the metaverse can
              connect learners from all over the world and empower them to
              interact in meaningful ways while providing unprecedented
              accessibility. That learning is more interactive and impactful, by
              allowing us to simulate everything from a conversation to a
              surgery.
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
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column',}}>
        <Box sx={CoolThingsBox}>
          <Typography sx={CoolThingsTypo}>Cool Things for Learning </Typography>
          <Typography>– Best experiences for learners –</Typography>
        </Box>
        <Box sx={CardList}>
          <ActionAreaCard
            image="data:image/jpeg;base64,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"
            title="Becomes Reality"
            desc="Virtual reality, or VR, is taking off in education with an increasing number of schools adopting the technology.

          VR allows students to experience destinations from across the world without ever having to leave the classroom. Imagine students being able to explore the pyramids of giza whilst sat at their desks. This is what virtual reality education allows."
          />
          <ActionAreaCard
            image="https://www.viar360.com/wp-content/uploads/2018/10/Virtual-Reality-Education-1024x535.jpg"
            title="Immersive"
            desc="Metaverse allows students to experience destinations from across the world without ever having to leave the classroom. Imagine students being able to explore the pyramids of giza whilst sat at their desks. This is what virtual reality education allows."
          />
          <ActionAreaCard
            image="data:image/jpeg;base64,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"
            title="Fun Way of Learning"
            desc="Given the growth of VR within education, and the positive response from schools, we wouldn’t be surprised if VR made it onto the curriculum at some point in the future. Curriculum aligned content and structured VR lesson plans have already been developed and are available in the UK."
          />
        </Box>
      </Box>
      <Box>
        <Box sx={HowCanWeBox}>
          <Typography sx={HowCanWeTypo}>How Can We Help Students? </Typography>
          <Typography>– Students Oriented –</Typography>
        </Box>
        <SimpleAccordion />
      </Box>
      <Box>
        <Box sx={ContactUsBox}>
          <Typography sx={ContactUsTypo}>Contact Us </Typography>
          <Typography>– Get in Touch –</Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              required
              id="outlined-required"
              label="First Name"
              sx={{ maxWidth: "500px" }}
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              sx={{ mt: "25px", maxWidth: "500px" }}
            />
            <TextField
              required
              id="outlined-required"
              label="School/University"
              sx={{ mt: "25px", maxWidth: "500px" }}
            />
            <Box sx={PhoneBox}>
              <CountrySelect />
              <TextField
                required
                id="outlined-required"
                label="Phone"
                sx={{ mt: "25px", width: "250px" }}
              />
            </Box>
            <Button variant="contained" sx={{ mt: "25px", height: "50px" }}>
              Submit
            </Button>
          </Box>
          <Box sx={{ml: '50px'}}>
            <Typography sx={{fontWeight: 'bold'}}>OUR PARTNER</Typography>
            <img src="https://cdn.langit7.id/foto/750/langit7/berita/2022/02/23/1/11933/mengenal-ivy-league-8-universitas-terbaik-di-amerika-psn.jpeg"
            width="100%"
            alt="partners"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
