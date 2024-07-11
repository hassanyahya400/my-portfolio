import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Link,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import SectionHeader from "./SectionHeader";
import { FaGithub, FaLinkedin, FaMedium, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

interface ContactFormData {
  email: string;
  name: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    email: "",
    name: "",
    message: "",
  });
  const socials = [
    { icon: <FaGithub />, url: "https://github.com/" },
    { icon: <FaLinkedin />, url: "https://linkedin.com" },
    { icon: <FaXTwitter />, url: "https://twitter.com" },
    { icon: <FaMedium />, url: "https://medium.com" },
  ];
  function handleFormData(formField: string, value: string) {
    setFormData({ ...formData, [formField]: value });
  }
  function clearFormData() {
    setFormData({
      email: "",
      name: "",
      message: "",
    });
  }
  return (
    <VStack gap="5" alignItems="flex-start">
      <SectionHeader label="Contact" />
      <HStack justifyContent="space-between" width="100%">
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={formData.email}
            _focusVisible={{ borderColor: "teal.500" }}
            onChange={(e) => handleFormData("email", e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input
            type="text"
            value={formData.name}
            _focusVisible={{ borderColor: "teal.500" }}
            onChange={(e) => handleFormData("name", e.target.value)}
          />
        </FormControl>
      </HStack>
      <FormControl>
        <FormLabel>Message</FormLabel>
        <Textarea
          placeholder="Hello Hassan 👋"
          height="40"
          value={formData.message}
          _focusVisible={{ borderColor: "teal.500" }}
          onChange={(e) => handleFormData("message", e.target.value)}
        />
      </FormControl>
      <HStack gap="5">
        <Link
          href={`mailto:hassanyahya400@gmail.com,hassanyahya400@outlook.com?subject=[${formData.name}]&body=${formData.message}`}
          _hover={{ textDecoration: "none" }}
        >
          <Button colorScheme="teal" variant="solid">
            Send Message
          </Button>
        </Link>
        <Button
          colorScheme="teal"
          variant="outline"
          _focusVisible={{ borderColor: "teal.500" }}
          onClick={() => clearFormData()}
        >
          Reset
        </Button>
      </HStack>
      <HStack gap="4">
        {socials.map((s) => (
          <Link href={s.url} key={s.url} isExternal>
            <IconButton
              isRound={true}
              variant="solid"
              colorScheme="teal"
              aria-label="Done"
              fontSize="24px"
              icon={s.icon}
            />
          </Link>
        ))}
      </HStack>
    </VStack>
  );
};

export default Contact;
