import { AbsoluteCenter, Box, Divider, HStack } from "@chakra-ui/react";
import { FaLinkedin, FaGithubSquare, FaMedium } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box position="relative" padding="10">
      <Divider />
      <AbsoluteCenter>
        <HStack cursor="pointer">
          <FaSquareXTwitter size="24" />
          <FaLinkedin size="24" />
          <FaGithubSquare size="24" />
          <FaMedium size="24" />
        </HStack>
      </AbsoluteCenter>
    </Box>
  );
};

export default Footer;
