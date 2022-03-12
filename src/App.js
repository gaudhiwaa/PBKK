import { Box } from "@mui/system";
import NavigationBar from "./pages/NavigationBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Services from "./pages/Services";
import Collab from "./pages/Collab";
import Company from "./pages/Company";

const AppStyle = {
  padding: "50px 150px 50px 150px",
  // backgroundImage: "public/image/background.jpg",
  fontFamily: "Ubuntu",
};

function App() {

  return (
    <Router>
      <Box sx={AppStyle}>
        <NavigationBar />
        <Routes>
          <Route path='/q1' element={<Home/>}/>
          <Route path='/q1/profile' element={<Profile/>}/>
          <Route path='/q1/company' element={<Company/>}/>
          <Route path='/q1/services' element={<Services/>}/>
          <Route path='/q1/collaboration' element={<Collab/>}/>
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
