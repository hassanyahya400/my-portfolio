import { Grid } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import ProfileSummary from "./components/ProfileSummary";
import Footer from "./components/Footer";

function App() {
  return (
    <Grid>
      <NavBar />
      <ProfileSummary/>
      <Footer/>
    </Grid>
  );
}

export default App;
