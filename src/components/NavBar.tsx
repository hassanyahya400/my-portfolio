import { Box, HStack, Text } from "@chakra-ui/react";
import { FaRegGem } from "react-icons/fa";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <Box paddingInline="8">
      <HStack
        justifyContent="space-between"
        maxWidth="3xl"
        marginInline="auto"
        marginBlock="10"
      >
        <HStack>
          <FaRegGem size="24" color="teal" />
          <Text fontWeight="500">HASSAN ⊡ YAHYA</Text>
        </HStack>
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};

export default NavBar;
