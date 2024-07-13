import { AbsoluteCenter, Box, Divider, HStack } from "@chakra-ui/react";
import { FaLinkedin, FaGithubSquare, FaMedium } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box padding="10" marginTop={{ base: "0", md: "20" }} position="relative">
      <Divider />
      <AbsoluteCenter paddingInline="10">
        <HStack cursor="pointer">
          <FaGithubSquare size="24" />
          <FaLinkedin size="24" />
          <FaSquareXTwitter size="24" />
          <FaMedium size="24" />
        </HStack>
      </AbsoluteCenter>
    </Box>
  );
};

export default Footer;
