import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CountrySelect from "./components/CountrySelect";

const ContactUsBox = {
  display: "flex",
  // justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  mt: "120px",
  mb: "60px",
};

const ContactUsTypo = {
  fontSize: "30px",
  fontWeight: "bold",
};

const PhoneBox = {
  display: "flex",
};

export default function Collab() {
  return (
    <>
      <Box>
        <Box sx={ContactUsBox}>
          <Typography sx={ContactUsTypo}>Contact Us </Typography>
          <Typography>– Get in Touch –</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              required
              id="outlined-required"
              label="Full Name"
              sx={{ maxWidth: "500px" }}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
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
          <Box sx={{ ml: "50px" }}>
            <Typography sx={{ fontWeight: "bold" }}>OUR PARTNER</Typography>
            <img
              src="https://cdn.langit7.id/foto/750/langit7/berita/2022/02/23/1/11933/mengenal-ivy-league-8-universitas-terbaik-di-amerika-psn.jpeg"
              width="100%"
              alt='partners'
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
