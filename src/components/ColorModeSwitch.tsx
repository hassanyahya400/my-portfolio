import { Box, VisuallyHidden, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [colorTheme, setColorTheme] = useState(colorMode);

  function handleColorTheme() {
    if (colorTheme == "dark") {
      setColorTheme("light");
    } else {
      setColorTheme("dark");
    }
    return toggleColorMode();
  }

  return (
    <Box cursor="pointer" onClick={handleColorTheme}>
      {colorTheme === "dark" ? <FaSun /> : <FaMoon />}
      <VisuallyHidden>Color Mode Switch</VisuallyHidden>
    </Box>
  );
};

export default ColorModeSwitch;
