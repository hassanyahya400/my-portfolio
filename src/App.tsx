import { Grid, useDisclosure } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import ProfileSummary from "./components/ProfileSummary";
import Footer from "./components/Footer";
import { useState } from "react";
import SectionButtonGroup from "./components/SectionButtonGroup";
import SectionModal from "./components/SectionModal";

function App() {
  const [activeSection, setActiveSection] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleChangeSection(section: string) {
    setActiveSection(section);
    onOpen();
  }

  return (
    <Grid>
      <NavBar />
      <ProfileSummary />
      <SectionModal
        isOpen={isOpen}
        onClose={onClose}
        activeSection={activeSection}
      />
      <SectionButtonGroup
        activeSection={activeSection}
        onSelectSection={handleChangeSection}
      />
      <Footer />
    </Grid>
  );
}

export default App;
