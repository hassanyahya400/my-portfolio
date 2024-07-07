import { Box, HStack, Text } from "@chakra-ui/react";
import { FaRegGem } from "react-icons/fa";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <Box>
      <HStack
        justifyContent="space-between"
        maxWidth="4xl"
        marginInline="auto"
        marginBlock="10"
      >
        <HStack>
          <FaRegGem />
          <Text>HASSAN YAHYA</Text>
        </HStack>
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default NavBar;
