import { AbsoluteCenter, Box, Divider, HStack, Link } from "@chakra-ui/react";
import { FaLinkedin, FaGithubSquare, FaMedium } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socials = [
    {
      icon: <FaGithubSquare size="32" />,
      url: "https://github.com/hassanyahya400",
    },
    {
      icon: <FaLinkedin size="32" />,
      url: "https://linkedin.com/in/hassanyahya",
    },
    {
      icon: <FaSquareXTwitter size="32" />,
      url: "https://twitter.com/yougothassan",
    },
    { icon: <FaMedium size="32" />, url: "https://medium.com/dmdhassan" },
  ];
  return (
    <Box padding="10" marginTop={{ base: "0", md: "20" }} position="relative">
      <Divider />
      <AbsoluteCenter paddingInline="10">
        <HStack cursor="pointer">
          {socials.map((s) => (
            <Link key={s.url} href={s.url}>
              {s.icon}
            </Link>
          ))}
        </HStack>
      </AbsoluteCenter>
    </Box>
  );
};

export default Footer;
